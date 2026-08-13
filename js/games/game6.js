// const box = document.querySelector("#box")

// let isDrawing = false

// box.addEventListener("mousedown", event => {
//     if(event.button === 0){
//         isDrawing = true
//     }
// })

// document.addEventListener("mouseup", () => {
//     isDrawing = false
// })

// box.addEventListener("mousemove", event => {
//     if(!isDrawing){
//         return
//     }
//     const areaDraw = box.getBoundingClientRect()
//     const div = document.createElement("div")
//     div.classList.add("point")
//     div.style.left = `${event.clientX - areaDraw.left - 4}px`
//     div.style.top = `${event.clientY - areaDraw.top - 4}px`
//     box.append(div)
// })