document.querySelector('.fillers').addEventListener('click', async (e) => {
    const { target } = e;
    if (!target.classList.contains('filler')){
        return
    }
    const promise = await fetch(`http://localhost:5000/${target.dataset.script}`,{
    });
    const body = await promise.text();
    chrome.tabs.executeScript({code:`(${body})()`});
});


// Реализовать для всех кнопок
// Отредактировать скрипты