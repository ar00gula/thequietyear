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
    changeSize(item, "smol");
  })
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

  // map.addEventListener('click', function(e) {
  //     console.log(`x ${e.clientX}`)
  //     console.log(`y ${e.clientY}`)
  // })


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
      isActive = false;
      
      plots = [];
    }
