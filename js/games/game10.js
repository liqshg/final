const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1,
        img: "./img/Albert_Einstein_Head.jpg"
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2,
        img: "./img/Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg"
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3,
        img: "./img/Justus_Sustermans_-_Portrait_of_Galileo_Galilei,_1636.jpg"
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4,
        img: "./img/Portrait_of_Marie_Curie.jpg"
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5,
        img: "./img/Portrait_Confused_With_Johannes_Kepler_1610.jpg"
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6,
        img: "./img/Nikolaus_Kopernikus.jpg"
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7,
        img: "./img/Max_Planck_(1858-1947).jpg"
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8,
        img: "./img/319-master_1.jpg"
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9,
        img: "./img/Ada_Lovelace_portrait.jpg"
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10,
        img: "./img/images.jpg"
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11,
        img: "./img/Lise_Meitner12.jpg"
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12,
        img: "./img/images (1).jpg"
    }
];

const boxCont = document.querySelector("#boxCont")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")

function clear() {
    boxCont.innerHTML = ""
}

function reset(){
    setTimeout(()=>{
        clear()
        create(scientists)
    }, 3000)
}

function create(scientists) {
    scientists.forEach((obj) => {
        const HTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;" class="games--science--container--box">
            <p  style="font-family: Montserrat Alternates; font-size: 12px; font-weight: 400; font-style: normal; color: white;">${obj.name}</p>
            <p  style="font-family: Montserrat Alternates; font-size: 12px; font-weight: 400; font-style: normal; color: white;">${obj.surname}</p>
            <p  style="font-family: Montserrat Alternates; font-size: 12px; font-weight: 400; font-style: normal; color: white;">${obj.born}-${obj.dead}</p>
            </div>
            `
        const el = document.createElement("div")
        el.innerHTML = HTML
        el.style.backgroundImage = `url('${obj.img}')`
        el.style.backgroundSize = "cover"
        el.style.backgroundPosition = "center"
        el.style.borderRadius = "20px"

        boxCont.append(el)

        console.log(obj.img)
    })
}

clear()
create(scientists)

btn1.addEventListener("click", () => {
    clear();
    const res1 = scientists.filter((scientist) => scientist.born > 1800 && scientist.born <= 1900)
    create(res1)
})

btn2.addEventListener("click", () => {
    clear();
    const res2 = scientists.filter((scientist) => scientist.born === 1879)
    create(res2)
    console.log(3)
})

btn3.addEventListener("click", () => {
    clear();
    const res3 = [...scientists].sort((a, b) => a.name.localeCompare(b.name))
    // const res = scientists.toSorted((a,b) => a.name.localeCompare(b.name))
    create(res3)
})

btn4.addEventListener("click", () => {
    clear();
    const res4 = scientists.filter((scientist) => scientist.surname.startsWith("C"))
    create(res4)
})

btn5.addEventListener("click", () => {
    clear();
    const res5 = [...scientists].sort((a, b) => {
        return (b.dead - b.born) - (a.dead - a.born)
    })
    create(res5)
})

btn6.addEventListener("click", () => {
    clear();
    const res6 = scientists.filter((scientist) => !scientist.name.startsWith("A"))
    create(res6)
})

btn7.addEventListener("click", () => {
    clear();
    const max = Math.max(...scientists.map((scientist) => scientist.born))
    const res7 = scientists.filter((scientist) => scientist.born === max)
    create(res7)
})

btn8.addEventListener("click", () => {
    clear();
    const maxL = Math.max(...scientists.map((scientist) => scientist.dead - scientist.born))
    const minL = Math.min(...scientists.map((scientist) => scientist.dead - scientist.born))
    const res81 = scientists.filter((scientist) => (scientist.dead - scientist.born) === maxL)
    const res82 = scientists.filter((scientist) => (scientist.dead - scientist.born) === minL)
    create(res81)
    create(res82)
})


btn9.addEventListener("click", () => {
    clear();
    const res9 = scientists.filter((scientist) => {
        return scientist.name.startsWith(scientist.surname[0])
    })
    create(res9)
})