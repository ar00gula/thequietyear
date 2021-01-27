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
function brushColor(color) {
  ctx.strokeStyle = `rgb(${color})`
}

function brushWeight(weight) {
  ctx.lineWidth = weight
}

function colorRecall() {
    brushColor(rememberedColor)
  }

let rememberedColor = "0, 0, 0"
document.getElementById("pencil").addEventListener("click", e => {
  brushWeight(1);
  colorRecall()
})
  
document.getElementById("marker").addEventListener("click", e => {
  brushWeight(4);
  colorRecall()
})

document.getElementById("eraser").addEventListener("click", e => {
  brushColor("255, 232, 189")
  brushWeight(8)
})

let colorButton = document.getElementById("colorDropdown")
colorButton.addEventListener("click", e => {
  if (e.target.id === "color") {
    if (document.getElementById("colorList").classList.contains("hidden")){
      document.getElementById("colorList").classList.remove("hidden")
    } else {
      document.getElementById("colorList").classList.add("hidden")
    }
  }
})
document.getElementById("red").addEventListener("click", e => {
  if (ctx.strokeStyle === 'rgb(255, 232, 189)') {
    brushColor("255, 232, 189")
  } else {
    brushColor("144, 0, 0");
    rememberedColor = "144, 0, 0";
  }
})
document.getElementById("black").addEventListener("click", e => {
  brushColor("0, 0, 0");
  rememberedColor = "0, 0, 0";
})




//Map

  let map = document.getElementById('map')
  let ctx = map.getContext('2d');
  ctx.strokeStyle = 'rgba(100, 200, 0, 1)';


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
