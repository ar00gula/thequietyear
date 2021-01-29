let drawCard = document.getElementById("draw-card")
let flipCardInner = document.getElementById("flip-card-inner")
let flipCardFront = document.getElementById("flip-card-front")
let flipCardBack = document.getElementById("flip-card-back")
let drawnCard = ""

// let drawCardBack = document.getElementById("flip-card-back")

drawCard.addEventListener("click", function() {
    
    fetchCard().then(drawnCard => flipCard(drawnCard)).then(resp => setTimeout(function() {resetCard()}, 1000))

})

function fetchCard() {
    return fetch('http://localhost:3000/cards/').then(resp => resp.json()).then(object => {
        drawnCard = object["image"]
        return drawnCard})
}

function flipCard(drawnCard) {
    if (flipCardBack.classList.contains("flip-card-back") === false) {
        flipCardBack.classList.add("flip-card-back")
        flipCardInner.classList.add("flip-card-inner")
        flipCardFront.classList.add("flip-card-front")
    }
    flipCardInner.classList.add("transform")
    flipCardBack.style.backgroundImage = `url('${drawnCard}')`//"url('images/kingofspring.png')" 

    return "hoorah!"
}

function resetCard() {
    document.getElementById("discard-pile").src = drawnCard //"images/kingofspring.png" //newCard
    
    flipCardFront.classList.remove("flip-card-front")
    flipCardBack.classList.remove("flip-card-back")
    flipCardBack.style.backgroundImage = ""
    flipCardInner.classList.remove("flip-card-inner")
    flipCardInner.classList.remove("transform")
}