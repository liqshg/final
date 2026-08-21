const btnOpenSelect = document.querySelector("#btnOpenSelect")
const arrow = document.querySelector("#arrow")
const select = document.querySelector("#select")
const numerical = document.querySelector("#numerical")
const game = document.querySelector("#game")
const acquaintance = document.querySelector("#acquaintance")

const games =  [
    {
      id: 1,
      name: 'Високосний калькулятор',
      category: 'numerical',

    },
    {
        id: 2,
        name: 'Вгадай число',
        category: 'numerical',
  
      },
      {
        id: 3,
        name: 'Камінь-Ножиці-Папір',
        category: 'game',
  
      },
      {
        id: 4,
        name: 'Калькулятор',
        category: 'numerical',
  
      },
      {
        id: 5,
        name: 'Калькулятор часу',
        category: 'numerical',
  
      },
      {
        id: 6,
        name: 'Google динозаврик',
        category: 'game',
  
      },
      {
        id: 7,
        name: 'Футбол',
        category: 'game',
  
      },
      {
        id: 8,
        name: 'Найбільше число',
        category: 'numerical',
  
      },
      {
        id: 9,
        name: 'Наша команда',
        category: 'acquaintance',
  
      },
      {
        id: 10,
        name: 'Вчений',
        category: 'acquaintance',
  
      },
]

select.classList.add("close")

btnOpenSelect.addEventListener("click", (event) => {
    event.stopPropagation()
    select.classList.toggle("close")
    arrow.classList.toggle("rotate")
    showAll()
})
 
document.addEventListener("click", (event) => {
    if (!select.contains(event.target)) {
        select.classList.add("close")
        arrow.classList.remove("rotate")
    }
})

numerical.addEventListener("click", () => {
    select.classList.add("close")
    showGame("numerical")
})
game.addEventListener("click", () => {
    select.classList.add("close")
    showGame("game")
})
acquaintance.addEventListener("click", () => {
    select.classList.add("close")
    showGame("acquaintance")
})

function hideGame() {
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #10').hide();
}

function showAll(){
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #10').show();
}

function showGame(category){
    hideGame()
    games.forEach((game)=>{
        if(game.category === category){
            $(`#${game.id}`).show()
        }
    })
    arrow.classList.remove("rotate")
}
