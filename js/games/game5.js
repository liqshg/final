const inputGame5 = document.querySelector("#inputGame5")
const btnGame5 = document.querySelector("#btnGame5")
const timeResult = document.querySelector("#timeResult")



function timeCount() {
    let userMns = Number(inputGame5.value)
    if (Number.isNaN(userMns)) {
        timeResult.textContent = "Введіть число"
        console.log(1)
    } else {
        let days = String(Math.floor(userMns / 1440)).padStart(2,"0")
        let hrs = String(Math.floor((userMns % 1440) / 60)).padStart(2,"0")
        let mns = String(userMns % 60).padStart(2,"0")
        timeResult.textContent = `${days}дн. ${hrs}:${mns}`
        console.log(2)
    }
    renew()
}

function renew() {
    setTimeout(() => {
        timeResult.textContent = `00дн. 00:00`
        inputGame5.value = ""
    }, 3000)
}

btnGame5.addEventListener("click", timeCount)
inputGame5.addEventListener("blur", timeCount)