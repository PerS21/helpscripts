// const buttons = [
//     {label:"SBR_escr", script:"sbr-escr.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_noSaller", script:"sbr-noSaller.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_no_escr_entity", script:"sbr-no-escr-entity.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_no_escr_physical", script:"sbr-no-escr-physical.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"DKP", script:"dkp.js", image:"contract.svg", urlRe: /\/contract-kit\/contracts\/.*/},
//     ];

const rootElement = document.querySelector('.root');

chrome.tabs.query({active:true},(tabs)=>{
    const url = tabs[0].url;
    chrome.storage.local.get('scripts', function({scripts}) {
        const haveScripts = Array.isArray((scripts));
        if (!haveScripts){
            rootElement.innerHTML = "Переоткройте расширение";
            return;
        }
        const filterScripts = scripts.filter((scriptProps)=>{
             return scriptProps.urlsRules.some((rule)=>{
                return new RegExp(rule).test(url);
            },scripts);
        });
        displayButtons(filterScripts);
    });
});

const displayButtons = (scripts)=> {
    scripts.forEach(async (scriptProps) => {
        const button = document.createElement('button');
        button.setAttribute('data-script', scriptProps.script);
        button.innerHTML = scriptProps.label;
        button.className = "filler";
        const img = document.createElement('img');
        img.src = `img/${scriptProps.image}`;
        button.prepend(img);
        rootElement.append(button);
        //
        // const promise = await fetch(`https://pers21.github.io/helpscripts/scripts/${scriptProps.script}`, {});
        // const body = await promise.text();
        // chrome.storage.sync.set({[scriptProps.script]: body}, function() {
        // });
    });
};

// document.querySelector('.root').addEventListener('click', async (e) => {
//     const { target } = e;

//     if (!target.classList.contains('filler')){
//         return
//     }

//     chrome.storage.sync.get(target.dataset.script, function(result) {
//         const fil = result[target.dataset.script];
//         chrome.tabs.executeScript({code:`(${fil})()`});
//     });
// });
