const CURRENT_VERSION = '2020.11.12-3';

chrome.storage.sync.get('version', async function ({ version }) {
    if(version === CURRENT_VERSION) {
        return;
    }

    const { default: dkp } = await import('./dkp.js');

    console.log(dkp);

    chrome.storage.sync.set({
        version: CURRENT_VERSION,
        scripts: [
            dkp
        ]
    });
});
