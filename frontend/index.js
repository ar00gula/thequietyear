class Drawing {
  constructor(coordinates) {
    this._coordinates = coordinates;
  }

  set coordinates(clear) {
    this._coordinates = clear
  }
}
  
  let toggleBar = document.getElementById("toggle-bar")

toggleBar.addEventListener("click", function() {
    let toggleChildren = document.getElementsByClassName("toggle-child")
    if (toggleBar.classList.contains("small")) {
    toggleBar.classList.remove("small");
    Array.from(toggleChildren).forEach(function(child) {
        child.classList.remove("hidden") 
        });

    } else {
        toggleBar.classList.add("small");
        Array.from(toggleChildren).forEach(function(child) {
            child.classList.add("hidden") 
            });
    }
})

let map = document.getElementById('map')
let ctx = map.getContext('2d');
ctx.strokeStyle = 'rgba(100, 0, 0, 1)';


// create a flag
let isActive = false;

// array to collect coordinates
let plots = [];

map.addEventListener('mousedown', startDraw, false);
map.addEventListener('mousemove', draw, false);
map.addEventListener('mouseup', endDraw, false);

map.addEventListener('click', function(e) {
    console.log(`x ${e.clientX}`)
    console.log(`y ${e.clientY}`)
})


function marker() {
  ctx.lineWidth = 4
}
function draw(e) {
  if(!isActive) return;

  let x = e.clientX
  let y = e.clientY

  plots.push({x: x, y: y});
  drawOnCanvas(plots);

}

function drawOnCanvas(plots) {
    ctx.beginPath();
    console.log(plots)
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
    art = 
    isActive = false;
    plots = [];
  }

  