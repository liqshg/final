const left = document.querySelector("#left")
const right = document.querySelector("#right")
const cards = document.querySelectorAll(".games--slider--container--box--card")
const dots = document.querySelectorAll(".games--slider--container--box--dots--dot")

let current = 0

function showCard() {
    cards.forEach(card => {
        card.style.display = "none"
    })
    dots.forEach(dot => {
        dot.classList.remove("active")
    })

    cards[current].style.display = "flex"
    dots[current].classList.add("active")
}

showCard()

right.addEventListener("click", () => {
    current += 1
    if (current >= cards.length) {
        current = 0
    }
    showCard()
})

left.addEventListener("click", () => {
    current -= 1
    if (current < 0) {
        current = cards.length -1
    }
    showCard()
})

dots.forEach((dot,index)=>{
    dot.addEventListener("click", ()=>{
        current = index
        showCard()
    })
})