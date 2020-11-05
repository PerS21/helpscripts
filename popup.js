const buttons = [
    {label:"SBR_escr", script:"sbr-escr.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
    {label:"SBR_noSaller", script:"sbr-noSaller.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
    {label:"SBR_no_escr_entity", script:"sbr-no-escr-entity.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
    {label:"SBR_no_escr_physical", script:"sbr-no-escr-physical.js", image:"padlock.png", urlRe: /\/secure-payment-service\/deals\/.*/},
    {label:"DKP", script:"filling-dkp.js", image:"contract.svg", urlRe: /\/contract-kit\/contracts\/.*/},
    ];

chrome.tabs.query({active:true},(tabs)=>{
    const url = tabs[0].url;
    console.log(url);
    const filterButtons = buttons.filter((buttonProps)=>{
        return buttonProps.urlRe.test(url);
    });
    displayButtons(filterButtons);
});

const displayButtons = (buttons)=> {
    const rootElement = document.querySelector('.root');
    buttons.forEach((buttonProps) => {
        const button = document.createElement('button');
        button.setAttribute('data-script', buttonProps.script);
        button.innerHTML = buttonProps.label;
        button.className = "filler";
        const img = document.createElement('img');
        img.src = `img/${buttonProps.image}`;
        button.prepend(img);
        rootElement.append(button);
    });
};

document.querySelector('.root').addEventListener('click', async (e) => {
    const { target } = e;
    if (!target.classList.contains('filler')){
        return
    }
    const promise = await fetch(`https://pers21.github.io/helpscripts/filling-scripts/${target.dataset.script}`,{});
    const body = await promise.text();
    chrome.tabs.executeScript({code:`(${body})()`});
});




