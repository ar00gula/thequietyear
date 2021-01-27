//toggle sizes

let sideBar = document.querySelectorAll(".sidebar")

function changeSize(item, size) {
  let bigContent = item.getElementsByClassName("fullsize");
  let smolContent = item.getElementsByClassName("collapsed");

  if (item.classList.contains(size)) {
  item.classList.remove(size);
  bigContent[0].classList.remove("hidden");
  smolContent[0].classList.add("hidden");

  } else {
      item.classList.add(size);
      bigContent[0].classList.add("hidden");
      smolContent[0].classList.remove("hidden");
  }
}

sideBar.forEach(item => {
  item.addEventListener("click", function(e) {
    if (e.target.classList.contains("sidebar")) {
      changeSize(item, "smol");
    }
  })
})


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

//Map

  let map = document.getElementById('map')
  let ctx = map.getContext('2d');

  // create a flag
  let isActive = false;

  // array to collect coordinates
  let plots = [];

  map.addEventListener('mousedown', startDraw, false);
  map.addEventListener('mousemove', draw, false);
  map.addEventListener('mouseup', endDraw, false);
  
  function draw(e) {
    if(!isActive) return;

    let x = e.clientX
    let y = e.clientY

    plots.push({x: x, y: y});
    drawOnCanvas(plots);

  }

  function drawOnCanvas(plots) {
      ctx.beginPath();
      ctx.moveTo(plots[0].x, plots[0].y);
    
      for(let i=1; i<plots.length; i++) {
        ctx.lineTo(plots[i].x, plots[i].y);
      }
      ctx.stroke()
    }

    function startDraw(e) {
      isActive = true;
    }

    function endDraw(e) {
      isActive = false;
      
      plots = [];
    }
