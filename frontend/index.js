//toggle sizes

// remind Jesse of breadcrumb in song.js 68

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