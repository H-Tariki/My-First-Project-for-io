let cards= document.getElementById("cards")
let bodyContainer= document.getElementById("body-cards-container")
let succesMesage= document.getElementById("succes-message")
let returnHome= document.getElementById("return-home")

const cardButtons=document.querySelectorAll(".click")

cardButtons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        cards.classList.add('hidden')
        succesMesage.classList.remove('hidden')
    })
})

returnHome.addEventListener('click' , ()=>{
    succesMesage.classList.add('hidden')
    cards.classList.remove('hidden')
})