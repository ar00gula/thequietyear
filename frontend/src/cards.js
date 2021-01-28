let drawCard = document.getElementById("draw-card")
let drawCardBack = document.getElementById("flip-card-back")

drawCard.addEventListener("click", function() {
    flipCard()
})

drawCardBack.addEventListener("click", function() {
    flipCardBack()
})

function flipCard() {
    document.getElementById("flip-card").classList.add("transform")
    document.getElementById("flip-card-inner").classList.add("transform")
}

function flipCardBack() {
    document.getElementById("flip-card").classList.remove("transform")
    document.getElementById("flip-card-inner").classList.remove("transform")
}