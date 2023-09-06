export const showName = () => {
    document.addEventListener('click', (e) => {
        let dataElem = e.target.dataset.button;
        if (dataElem) {
            let curElem = document.querySelector(`[data-button="${dataElem}"]`);
            curElem.parentElement.classList.toggle('opacity');
            let nextElem = curElem.nextElementSibling;
            nextElem.classList.toggle('show');

            if (nextElem.classList.contains('show')) {
                curElem.innerText = '-'
            } else {
                curElem.innerText = '+'
            }
        }
    })
}