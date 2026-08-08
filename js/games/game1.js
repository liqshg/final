const inputGame1 = document.querySelector("#inputGame1")
const btnGame1 = document.querySelector("#btnGame1")
const birthText = document.querySelector("#birthText")


function checkYear(){
    let year = Number(inputGame1.value)
    console.log(year)
    if (year === 0 || Number.isNaN(year)) {
        birthText.textContent = "Введіть рік народження."
        birthText.style.color = "#990000"
    } else if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        birthText.textContent = "Ви народилися у високосний рік!"
        birthText.style.color = "#039900"
    } else {
        birthText.textContent = "Ви народилися не у високосний рік!"
        birthText.style.color = "#990000"
    }
}


btnGame1.addEventListener("click", checkYear)
inputGame1.addEventListener("blur", checkYear)