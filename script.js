const password = document.querySelector(`#password`);
const confirm = document.querySelector(`#confirm`);
const div = password.nextElementSibling;
confirm.addEventListener(`click`, function () {
    while (confirm.textContent !== password.textContent) {
        confirm.classList.add(`.error`);
        confirm.classList.add(`.error`);
        div.textContent = `* Passwords do not match`;
        div.style.color = `rgb(230, 174, 174)`;
        div.setAttribute(`style`, `font-size: 0.6rem; margin-top: 3px;`)
    }
})