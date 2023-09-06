export const showName = () => {
    document.addEventListener('click', (e) => {
        let dataElem = e.target.dataset.button;
        if (dataElem) {
            let curElem = document.querySelector(`[data-button="${dataElem}"]`);
            curElem.parentElement.classList.toggle('opacity');
            let nextElem = curElem.nextElementSibling;
            nextElem.classList.toggle('show');

            if (nextElem.classList.contains('show')) {
                curElem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">\n` +
                                     `<path  d="M0 1H10" stroke="white" stroke-width="2"/>\n` +
                                    `</svg>`;
            } else {
                curElem.innerHTML = `<svg class="plus" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">\n` +
                                      `<path d="M20 15V25M15 20H25" stroke="white" stroke-width="2"/>\n` +
                                    `</svg>`;
            }
        }
    })
}