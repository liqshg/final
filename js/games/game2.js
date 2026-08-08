const inputGame2 = document.querySelector("#inputGame2")
const btnGame2 = document.querySelector("#btnGame2")
const birthText2 = document.querySelector("#birthText2")


function guessNum(){
    let userNum = Number(inputGame2.value)
    const randomNum = Number(Math.floor(Math.random() * 10) + 1)
    console.log(randomNum)
    if (Number.isNaN(userNum) || userNum === 0) {
        birthText2.textContent = `Введіть число.`
        birthText2.style.color = "#990000"
    } else if (randomNum === userNum) {
        birthText2.textContent = `Вітаю, ви вгадали число! ${randomNum}`
        birthText2.style.color = "#039900"
    } else {
        birthText2.textContent = `Ви програли, комп’ютер загадав ${randomNum}`
        birthText2.style.color = "#990000"
    }
}


btnGame2.addEventListener("click", guessNum)
inputGame2.addEventListener("blur", guessNum)