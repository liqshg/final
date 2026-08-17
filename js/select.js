const btnOpenSelect = document.querySelector("#btnOpenSelect")
const arrow = document.querySelector("#arrow")
const select = document.querySelector("#select")

select.classList.add("close")

btnOpenSelect.addEventListener("click", (event) => {
    event.stopPropagation()
    select.classList.toggle("close")
    arrow.classList.toggle("rotate")
})


document.addEventListener("click", (event) => {
    if (!select.contains(event.target)) {
        select.classList.add("close")
        arrow.classList.remove("rotate")
    }
})
