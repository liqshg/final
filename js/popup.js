const inputFooter = document.querySelector("#inputFooter")
const btnFooter = document.querySelector("#btnFooter")
const popup = document.querySelector("#popup")
const closeP = document.querySelector("#closeP")
const backP = document.querySelector("#backP")

popup.classList.add("close")
backP.classList.add("close")

btnFooter.addEventListener("click", () => {
    let res = inputFooter.value.trim()
    if (res.includes("@") && res.includes(".") && res.length >= 6) {
        popup.classList.remove("close")
        backP.classList.remove("close")
        closePopup()


    } else {
        inputFooter.value = ""
        inputFooter.placeholder = "Введіть email"
    }
})

closeP.addEventListener("click", () => {
    popup.classList.add("close")
    backP.classList.add("close")
    inputFooter.value = ""
})

backP.addEventListener("click", () => {
    popup.classList.add("close")
    backP.classList.add("close")
    inputFooter.value = ""
})

function closePopup() {
    setTimeout(() => {
        popup.classList.add("close")
        backP.classList.add("close")
        inputFooter.value = ""
    }, 4000)
}