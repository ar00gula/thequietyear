//brushes
let rememberedColor = "rgb(0, 0, 0)"

function brushColor(color) {
  ctx.strokeStyle = `${color}`
}

function brushWeight(weight) {
  ctx.lineWidth = weight
}

function colorRecall() {
    brushColor(rememberedColor)
  }

document.getElementById("pencil").addEventListener("click", e => {
  brushWeight(1);
  colorRecall()
})

document.getElementById("marker").addEventListener("click", e => {
  brushWeight(8);
  colorRecall()
})

document.getElementById("eraserDropdown").addEventListener("click", e => {
  brushColor("rgb(255, 232, 189)")
  if (e.target.id === "eraser") {
    if (document.getElementById("eraserList").classList.contains("hidden")){
      document.getElementById("eraserList").classList.remove("hidden")
    } else {
      document.getElementById("eraserList").classList.add("hidden")
    }
  }
  if (e.target.id ==="small") {
    brushWeight(8)
  } else if (e.target.id === "medium") {
    brushWeight(12)
  } else if (e.target.id === "large") {
    brushWeight(16)
  }
})

document.getElementById("colorDropdown").addEventListener("click", e => {
  if (e.target.id === "color") {
    if (document.getElementById("colorList").classList.contains("hidden")){
      document.getElementById("colorList").classList.remove("hidden")
    } else {
      document.getElementById("colorList").classList.add("hidden")
    }
  }
})

class Color {
  constructor(name) {
    this.name = name;
  }

  set hexCode(hex) {
    this.hexCode = hex
  }

  get hexCode() {
    return this.hexCode
  }

  clickable() {
    document.getElementById(this.name).addEventListener("click", function() {
      brushColor(this.id)
      rememberedColor = this.id
    })
  }
  
}

let colors = Array.from(document.getElementsByClassName("color"))
let colorObjects = colors.map(color => new Color(color.id)).forEach(color => color.clickable())