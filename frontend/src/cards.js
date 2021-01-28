let drawCard = document.getElementById("draw-card")
let flipCardInner = document.getElementById("flip-card-inner")
let flipCardFront = document.getElementById("flip-card-front")
let flipCardBack = document.getElementById("flip-card-back")
// let drawCardBack = document.getElementById("flip-card-back")

drawCard.addEventListener("click", function() {
    flipCard()
    document.getElementById("discard-pile").src = "images/kingofspring.png"

})

// drawCard.addEventListener("mouseup", function() {
//     flipCardInner.classList.remove("transform")
// })

// drawCard.addEventListener("mouseup", function() {
//     // document.getElementById("flip-card-inner").classList.remove("transform")
//     // document.getElementById("flip-card-front").classList.remove("transform")

// })

// drawCardBack.addEventListener("click", function() {
//     flipCardBack()
// })

function flipCard() {
    if (flipCardFront.classList.contains("put-back")) {
        flipCardFront.classList.remove("put-back")
    }
    flipCardInner.classList.add("transform")
    // let img = document.createElement("img")
    // img.src = "images/kingofspring.png"

    flipCardBack.style.backgroundImage = "url('images/kingofspring.png')"
    // document.getElementById("flip-card-front").classList.add("transform")
    // flipCardFront.classList.add("put-back")

}

// function flipCardBack() {
//     document.getElementById("flip-card").classList.remove("transform")
//     document.getElementById("flip-card-inner").classList.remove("transform")
// }