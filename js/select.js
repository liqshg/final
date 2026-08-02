const btnOpenSelect = document.querySelector("#btnOpenSelect")
const arrow = document.querySelector("#arrow")
const select = document.querySelector("#select")

select.classList.add("close")

btnOpenSelect.addEventListener("click", () => {
    select.classList.toggle("close")
})

