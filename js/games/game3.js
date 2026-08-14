const userStone = document.querySelector("#userStone")
const userScissors = document.querySelector("#userScissors")
const userPaper = document.querySelector("#userPaper")
const textSsc = document.querySelector("#textSsc")
const btnSsc = document.querySelector("#btnSsc")
const compWin = document.querySelector("#compWin")
const userWin = document.querySelector("#userWin")

function reset() {
    setTimeout(() => {
        userScissors.style.backgroundColor = "#000000"
        userStone.style.backgroundColor = "#000000"
        userPaper.style.backgroundColor = "#000000"
        btnSsc.textContent = "Варіант комп’ютера"
        textSsc.textContent = "Раунд виграв ......."
        
        textSsc.style.color = "#039900"
    }, 3000)
}

let comp = 0
let user = 0

userStone.addEventListener("click", () => {
    const arr = ["compStone", "compScissors", "compPaper"]
    const randomItem = arr[Math.floor(Math.random() * arr.length)]

    userStone.style.backgroundColor = "#1F8081"
    userScissors.style.backgroundColor = "#000000"
    userPaper.style.backgroundColor = "#000000"

    if (randomItem === "compStone") {
        btnSsc.textContent = "Камінь"
        textSsc.textContent = "Нічия"
        comp += 1
        user += 1
    } else if (randomItem === "compPaper") {
        btnSsc.textContent = "Папір"
        textSsc.textContent = "Комп’ютер виграв раунд!"
        textSsc.style.color = "#990000"
        comp += 1
    } else if (randomItem === "compScissors") {
        btnSsc.textContent = "Ножиці"
        textSsc.textContent = "Ви виграли раунд!"
        user += 1
    }

    if (user === 5 || comp === 5) {
        comp = 0
        user = 0
    }

    userWin.textContent = user
    compWin.textContent = comp

    reset()
})

userScissors.addEventListener("click", () => {
    const arr = ["compStone", "compScissors", "compPaper"]
    const randomItem = arr[Math.floor(Math.random() * arr.length)]

    userScissors.style.backgroundColor = "#1F8081"
    userStone.style.backgroundColor = "#000000"
    userPaper.style.backgroundColor = "#000000"

    if (randomItem === "compStone") {
        btnSsc.textContent = "Камінь"
        textSsc.textContent = "Комп’ютер виграв раунд!"
        textSsc.style.color = "#990000"
        comp += 1
    } else if (randomItem === "compPaper") {
        btnSsc.textContent = "Папір"
        textSsc.textContent = "Ви виграли раунд!"
        user += 1
    } else if (randomItem === "compScissors") {
        btnSsc.textContent = "Ножиці"
        textSsc.textContent = "Нічия"
        comp += 1
        user += 1
    }

    if (user === 5 || comp === 5) {
        comp = 0
        user = 0
    }

    userWin.textContent = user
    compWin.textContent = comp

    reset()
})
userPaper.addEventListener("click", () => {
    const arr = ["compStone", "compScissors", "compPaper"]
    const randomItem = arr[Math.floor(Math.random() * arr.length)]

    userPaper.style.backgroundColor = "#1F8081"
    userScissors.style.backgroundColor = "#000000"
    userStone.style.backgroundColor = "#000000"

    if (randomItem === "compStone") {
        btnSsc.textContent = "Камінь"
        textSsc.textContent = "Ви виграли раунд!"
        user += 1
    } else if (randomItem === "compPaper") {
        btnSsc.textContent = "Папір"
        textSsc.textContent = "Нічия"
        comp += 1
        user += 1
    } else if (randomItem === "compScissors") {
        btnSsc.textContent = "Ножиці"
        textSsc.textContent = "Комп’ютер виграв раунд!"
        textSsc.style.color = "#990000"
        comp += 1
    }

    if (user === 5 || comp === 5) {
        comp = 0
        user = 0
    }

    userWin.textContent = user
    compWin.textContent = comp


    reset()
})
