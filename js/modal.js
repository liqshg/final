const modal = document.querySelector("#modal")
const modalClose = document.querySelector("#modalClose")
const btnSubmit = document.querySelector("#btnSubmit")
const back = document.querySelector("#back")
const inputModal = document.querySelector("#input-modal")
const userName = document.querySelector("#userName")
const form = document.querySelector("#form")


modalClose.addEventListener("click", () => {
    modal.classList.add("modal-close")
    back.classList.add("modal-close")
    userName.textContent = "Гість"
})


back.addEventListener("click", () => {
    userName.textContent = "Гість"
    modal.classList.add("modal-close")
    back.classList.add("modal-close")
})


document.addEventListener("keydown", event => {
    if (event.code === "Escape") {
        userName.textContent = "Гість"
        modal.classList.add("modal-close")
        back.classList.add("modal-close")
    }
})


form.addEventListener("submit", event => {
    event.preventDefault()
    if (inputModal.value === "") {
        userName.textContent = "Гість"
    } else {
        userName.textContent = inputModal.value
    }

    modal.classList.add("modal-close")
    back.classList.add("modal-close")
})


