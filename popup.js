document.querySelector('.rooms').addEventListener('click', (e) => {
    const { target } = e;

    if(target.className !== 'room-button') {
        return;
    }

    chrome.tabs.create({ url: target.dataset.href });
});
