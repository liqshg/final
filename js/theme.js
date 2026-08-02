const btnTheme = document.querySelector("#btnTheme")
const img = document.querySelector("#img")


btnTheme.addEventListener("click", () => {

    if (!img.classList.contains("moveR")) {
        img.classList.add("moveR")
        img.classList.remove("moveL")
        img.src = "./img/moon.svg"
    } else {
        img.classList.remove("moveR")
        img.src = "./img/sun.svg"
    }
    
})