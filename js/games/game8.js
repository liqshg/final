const maxnum1 = document.querySelector("#maxnum1")
const maxnum2 = document.querySelector("#maxnum2")
const maxnum3 = document.querySelector("#maxnum3")
const maxnumText = document.querySelector("#maxnumText")


function maxNum() {
    const num1E = maxnum1.value.trim() !== ""
    const num2E = maxnum2.value.trim() !== ""
    const num3E = maxnum3.value.trim() !== ""
    if (num1E && num2E && num3E) {
        const num1 = Number(maxnum1.value)
        const num2 = Number(maxnum2.value)
        const num3 = Number(maxnum3.value)
        let num = Math.max(num1, num2, num3)
        maxnumText.textContent = `${num}`
        maxnum1.style.backgroundColor = "#D7D7D7"
        maxnum2.style.backgroundColor = "#D7D7D7"
        maxnum3.style.backgroundColor = "#D7D7D7"
        if (num1 === num) {
            maxnum1.style.backgroundColor = "#8ACECF"
        } else if (num2 === num) {
            maxnum2.style.backgroundColor = "#8ACECF"
        } else if (num3 === num) {
            maxnum3.style.backgroundColor = "#8ACECF"
        }
    } else {
        maxnumText.textContent = `Введіть числa`
        maxnum1.style.backgroundColor = "#D7D7D7"
        maxnum2.style.backgroundColor = "#D7D7D7"
        maxnum3.style.backgroundColor = "#D7D7D7"
    }
}

function reset() {
    setTimeout(() => {
        maxnum1.value == ""
        maxnum2.value == ""
        maxnum3.value == ""
        maxnum1.style.backgroundColor = "#D7D7D7"
        maxnum2.style.backgroundColor = "#D7D7D7"
        maxnum3.style.backgroundColor = "#D7D7D7"
        maxnumText.textContent = "Найбільше число, яке ви ввели - (число)"
    }, 3000)
}

maxnum1.addEventListener("input", maxNum)
maxnum2.addEventListener("input", maxNum)
maxnum3.addEventListener("input", maxNum)