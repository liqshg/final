const footBox = document.querySelector("#footBox")
const ball = document.querySelector("#ball")

footBox.addEventListener("click", (event) => {
    const area = footBox.getBoundingClientRect()
    let x = event.clientX - area.left
    let y = event.clientY - area.top

    // alert(event.clientX)
    // alert(area.left)

    if (x <= 25) {
        x = 23
    }
    if (y <= 25) {
        y = 23
    }
    if (x >= 675) {
        x = 673
    }
    if (y >= 195) {
        y = 193
    }

    if (ball.style.left > x) {
        ball.classList.toggle("rotateL")
    } else {
        ball.classList.toggle("rotateR")
    }

    ball.style.left = `${x - 25}px`
    ball.style.top = `${y - 25}px`

    Freset()
})

function Freset() {
    setTimeout(() => {
        ball.style.left = `92px`
        ball.style.top = `85px`
    }, 3000)
}