const calcInput1 = document.querySelector("#calcInput1")
const calcInput2 = document.querySelector("#calcInput2")
const calcResult = document.querySelector("#calcResult")
const btnPls = document.querySelector("#btnPls")
const btnMltpl = document.querySelector("#btnMltpl")
const btnMns = document.querySelector("#btnMns")
const btnDvd = document.querySelector("#btnDvd")
const btnEql = document.querySelector("#btnEql")

let operation = null


btnPls.addEventListener("click", () => {
    operation = "+"
    btnPls.style.backgroundColor = "#1F8081"
    btnMns.style.backgroundColor = "#000000"
    btnMltpl.style.backgroundColor = "#000000"
    btnDvd.style.backgroundColor = "#000000"
})

btnMns.addEventListener("click", () => {
    operation = "-"
    btnPls.style.backgroundColor = "#000000"
    btnMns.style.backgroundColor = "#1F8081"
    btnMltpl.style.backgroundColor = "#000000"
    btnDvd.style.backgroundColor = "#000000"
})

btnMltpl.addEventListener("click", () => {
    operation = "*"
    btnPls.style.backgroundColor = "#000000"
    btnMns.style.backgroundColor = "#000000"
    btnMltpl.style.backgroundColor = "#1F8081"
    btnDvd.style.backgroundColor = "#000000"
})

btnDvd.addEventListener("click", () => {
    operation = "/"
    btnPls.style.backgroundColor = "#000000"
    btnMns.style.backgroundColor = "#000000"
    btnMltpl.style.backgroundColor = "#000000"
    btnDvd.style.backgroundColor = "#1F8081"
})

btnEql.addEventListener("click", () => {
    const num1 = Number(calcInput1.value)
    const num2 = Number(calcInput2.value)

    if (calcInput1.value.trim() !== "" && calcInput2.value.trim() !== "" && !Number.isNaN(num1) && !Number.isNaN(num2)) {
        if (operation === "+") {
            calcResult.textContent = `${num1 + num2}`
        } else if (operation === "-") {
            calcResult.textContent = `${num1 - num2}`
        } else if (operation === "*") {
            calcResult.textContent = `${num1 * num2}`
        } else if (operation === "/") {
            if (num2 === 0) {
                calcResult.textContent = `ділення на 0 неможливе`

            } else {
                calcResult.textContent = `${num1 / num2}`
            }
        }
    } else {
        calcResult.textContent = `Введіть число`
    }
    calcResult.style.color = "#000000"

    refresh()
})

function refresh() {
    setTimeout(() => {
        calcResult.textContent = `Результат`
        calcInput1.value = null
        calcInput2.value = null
        calcResult.style.color = "#7E7E7E"
        btnPls.style.backgroundColor = "#000000"
        btnMns.style.backgroundColor = "#000000"
        btnMltpl.style.backgroundColor = "#000000"
        btnDvd.style.backgroundColor = "#000000"
    }, 3000)
}