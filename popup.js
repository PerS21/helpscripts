document.querySelector('.rooms').addEventListener('click', (e) => {
    const { target } = e;
    chrome.tabs.executeScript({file:`fillingScripts/${target.dataset.script}`});
});