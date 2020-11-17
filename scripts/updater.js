const CURRENT_VERSION = '2020.11.17-3';

chrome.storage.local.get('version', async function ({ version }) {
    if(version === CURRENT_VERSION) {
        return;
    }

    const { default: dkp } = await import('./dkp.js');
    const { default: sbr_escr } = await import('./sbr-escr.js');
    const { default: sbr_no_escr_entity } = await import('./sbr-no-escr-entity.js');
    const { default: sbr_no_escr_physical } = await import('./sbr-no-escr-physical.js');
    const { default: sbr_no_seller } = await import('./sbr-no-seller.js');


    chrome.storage.local.set({
        version: CURRENT_VERSION,
        scripts: {
            dkp,
            sbr_escr,
            sbr_no_escr_entity,
            sbr_no_escr_physical,
            sbr_no_seller
        }
    });
});
