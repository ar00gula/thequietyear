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

//Rulebook

document.getElementById("rule-heading").addEventListener("click", e => toggleHidden(document.getElementById("rulebook")))

function renderChapter(chapter) {
  let chapNum = "ch" + chapter[0]['chapter']
  chapter.forEach(page => {
    let section = document.createElement('li')
    let span = document.createElement('span')
    span.innerHTML = `${page['text']}<br><br>`
    span.classList.add("hidden")
    section.innerHTML = `<h4 class='page'>${page['name']}</h4>`
    document.getElementById(`${chapNum}`).appendChild(section).appendChild(span)
    section.addEventListener('click', e => toggleHidden(span))
  })
  document.getElementById(`${chapNum}-container`).addEventListener('click', e => toggleHidden(document.getElementById(chapNum)))

}

fetch(`http://localhost:3000/rules`)
  .then(function(response) {
      return response.json();
  })
  .then(function(object) {
   renderChapter(object['chapter_one'])
   renderChapter(object['chapter_two'])
  })

