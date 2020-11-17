const rootElement = document.querySelector('.root');
const versionElement = document.querySelector('.version');


chrome.tabs.query({active:true},(tabs)=>{
    chrome.storage.local.get(['scripts', 'version'], function({scripts, version}) {
        const url = tabs[0].url;
        versionElement.innerHTML = version;
        const haveScripts = scripts && (Object.keys(scripts).length > 0);
        if (!haveScripts){
            rootElement.innerHTML = "Переоткройте расширение";
            return;
        }
        const filterScripts = Object.entries(scripts).filter(([scriptId, scriptProps])=>{
             return scriptProps.urlsRules.some((rule)=>{
                return new RegExp(rule).test(url);
            });
        });
        displayButtons(filterScripts);
    });
});

const displayButtons = (scripts)=> {
    scripts.forEach(async ([scriptId, scriptProps]) => {
        const button = document.createElement('button');
        button.setAttribute('data-script-id', scriptId);
        button.innerHTML = scriptProps.label;
        button.className = "filler";
        const img = document.createElement('img');
        img.src = `img/${scriptProps.image}`;
        button.prepend(img);
        rootElement.append(button);
    });
};

chrome.storage.onChanged.addListener(function (changes,area){
    alert(changes, area);
    versionElement.innerHTML = version;
    displayButtons(filterScripts);
});


document.querySelector('.root').addEventListener('click', async (e) => {
    const { target } = e;

    if (!target.classList.contains('filler')){
        return
    }

    chrome.storage.local.get('scripts', function({scripts}) {
        const fil = scripts[target.dataset.scriptId];
        chrome.tabs.executeScript({code:`(${fil.script})()`});
    });
});
