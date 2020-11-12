const CURRENT_VERSION = '2020.11.12';

chrome.storage.sync.get('version', function (values) {
    const [storedVersion] = values;

    if(storedVersion === CURRENT_VERSION) {
        return;
    }

    const dkp = await import('./dkp.js');

    chrome.storage.sync.set({
        version: CURRENT_VERSION,
        scripts: [
            dkp
        ]});
});
