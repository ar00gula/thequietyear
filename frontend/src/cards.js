let drawCard = document.getElementById("draw-card")
let flipCardInner = document.getElementById("flip-card-inner")
let flipCardFront = document.getElementById("flip-card-front")
let flipCardBack = document.getElementById("flip-card-back")
let drawnCard = document.getElementById("discard-pile")
let i = 0
let deck
let popup = document.getElementById("popup")


fetchDeck()

drawCard.addEventListener("click", function() {
    flipCard(deck[i]["image"]).then(resp => setTimeout(function() {resetCard(resp)}, 1000))
})

drawnCard.addEventListener("dblclick", function() {
    popup.src = deck[i]["image"]
    popup.className = "show"
})

popup.addEventListener("dblclick", function() {
    popup.src = ""
    popup.className = "hidden"
})

function fetchDeck() {
    fetch('http://localhost:3000/cards/').then(resp => resp.json()).then(object => deck = object)
}

function flipCard(drawnCard) {
    if (flipCardBack.classList.contains("flip-card-back") === false) {
        flipCardBack.classList.add("flip-card-back")
        flipCardInner.classList.add("flip-card-inner")
        flipCardFront.classList.add("flip-card-front")
    }
    flipCardInner.classList.add("transform")
    flipCardBack.style.backgroundImage = `url('${drawnCard}')`//"url('images/kingofspring.png')" 
    i+=1
    let promise = new Promise (resolve => resolve(drawnCard))
    return promise
}

function resetCard(drawnCard) {
    document.getElementById("discard-pile").src = drawnCard //"images/kingofspring.png" //newCard
    
    flipCardFront.classList.remove("flip-card-front")
    flipCardBack.classList.remove("flip-card-back")
    flipCardBack.style.backgroundImage = ""
    flipCardInner.classList.remove("flip-card-inner")
    flipCardInner.classList.remove("transform")
}
