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