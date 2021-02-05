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

    //decrementing project weeks
    let weekCounter = Array.from(document.getElementsByClassName("weeks"))
    weekCounter.forEach(element => {
        let weeksLeft = parseInt(element.innerHTML)
        if (weeksLeft > 1) {
        element.innerHTML = weeksLeft - 1
        } else if (weeksLeft == 1){
            alert("Project completed!")
            element.innerHTML = weeksLeft - 1
        } else {
            element.parentElement.classList.add("hidden") //change this to complete when refactoring and adding functionality
        }
    })
})

// popup event listeners
drawnCard.addEventListener("dblclick", function() {
    popup.src = deck[i-1]["image"]
    popup.className = "show"
})

popup.addEventListener("dblclick", function() {
    popup.src = ""
    popup.className = "hidden"
})

// functions

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
    flipCardBack.style.backgroundImage = `url('${drawnCard}')` 
    i+=1
    let promise = new Promise (resolve => resolve(drawnCard))
    return promise
}

function resetCard(drawnCard) {
    document.getElementById("discard-pile").src = drawnCard
    
    flipCardFront.classList.remove("flip-card-front")
    flipCardBack.classList.remove("flip-card-back")
    flipCardBack.style.backgroundImage = ""
    flipCardInner.classList.remove("flip-card-inner")
    flipCardInner.classList.remove("transform")
}


