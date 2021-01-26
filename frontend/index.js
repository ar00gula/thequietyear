let toggleBar = document.getElementById("toggle-bar")

toggleBar.addEventListener("click", function() {
    let toggleChildren = document.getElementsByClassName("toggle-child")
    if (toggleBar.classList.contains("toolbar")) {
    toggleBar.classList.remove("toolbar");
    Array.from(toggleChildren).forEach(function(child) {
        child.classList.remove("hidden") 
        });

    } else {
        toggleBar.classList.add("toolbar");
        Array.from(toggleChildren).forEach(function(child) {
            child.classList.add("hidden") 
            });
    }
})

let rightSide = document.getElementById("right-side")


rightSide.addEventListener("click", function() {
  let rightChildren = document.getElementsByClassName("right-child")
  if (rightSide.classList.contains("sidebar")) {
  rightSide.classList.remove("sidebar");
  Array.from(rightChildren).forEach(function(child) {
      child.classList.remove("hidden") 
      });

  } else {
      rightSide.classList.add("sidebar");
      Array.from(rightChildren).forEach(function(child) {
          child.classList.add("hidden") 
          });
  }
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
