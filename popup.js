const rootElement = document.querySelector('.root');
const versionElement = document.querySelector('.version');

const update = ()=>{
    chrome.tabs.query({active:true},(tabs)=> {
        chrome.storage.local.get(['scripts', 'version'], function ({scripts, version}) {
            const url = tabs[0].url;
            versionElement.innerHTML = `<span class="text-gray-400">${version}</span>`;
            console.log(version);
            const haveScripts = scripts && (Object.keys(scripts).length > 0);
            if (!haveScripts) {
                rootElement.innerHTML = "Переоткройте расширение";
                return;
            }
            const filterScripts = Object.entries(scripts).filter(([scriptId, scriptProps]) => {
                return scriptProps.urlsRules.some((rule) => {
                    return new RegExp(rule).test(url);
                });
            });
            displayButtons(filterScripts);
        });
    });
};

update();

const displayButtons = (scripts)=> {
    rootElement.innerHTML = '';
    scripts.forEach(async ([scriptId, scriptProps]) => {
        const button = document.createElement('button');
        button.setAttribute('data-script-id', scriptId);
        button.innerHTML = scriptProps.label;
        button.className = "btn filler";
        rootElement.append(button);
    });
};



chrome.storage.onChanged.addListener(function (changes,area){
    if (area === 'local' && changes.version) {
        update();
    }
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
