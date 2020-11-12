// const buttons = [
//     {label:"SBR_escr", script:"sbr-escr.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_noSaller", script:"sbr-noSaller.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_no_escr_entity", script:"sbr-no-escr-entity.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"SBR_no_escr_physical", script:"sbr-no-escr-physical.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
//     {label:"DKP", script:"dkp.js", image:"contract.svg", urlRe: /\/contract-kit\/contracts\/.*/},
//     ];

chrome.storage.sync.get('scripts', ([scripts]) => {
    alert(scripts)
});


// chrome.tabs.query({active:true},(tabs)=>{
//     const url = tabs[0].url;
//     console.log(url);
//     const filterButtons = buttons.filter((buttonProps)=>{
//         return buttonProps.urlRe.test(url);
//     });
//     displayButtons(filterButtons);
// });

// const displayButtons = (buttons)=> {
//     const rootElement = document.querySelector('.root');
//     buttons.forEach(async (buttonProps) => {
//         const button = document.createElement('button');
//         button.setAttribute('data-script', buttonProps.script);
//         button.innerHTML = buttonProps.label;
//         button.className = "filler";
//         const img = document.createElement('img');
//         img.src = `img/${buttonProps.image}`;
//         button.prepend(img);
//         rootElement.append(button);

//         const promise = await fetch(`https://pers21.github.io/helpscripts/scripts/${buttonProps.script}`, {});
//         const body = await promise.text();
//         chrome.storage.sync.set({[buttonProps.script]: body}, function() {
//         });
//     });
// };

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
