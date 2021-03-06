const resources = document.getElementById("resources")
const resourceMenu = document.getElementById("resource-menu")
const addResourceButton = document.getElementById("add-resource")
const resourceModal = document.getElementById("resourceModal");

const projects = document.getElementById("projects")
const projectMenu = document.getElementById("project-menu")
const addProjectButton = document.getElementById("add-project")
// const projectModal = document.getElementById("projectModal");


resources.addEventListener("click", function() {
    toggleHidden(resourceMenu)
})

// modalSetup(addResourceButton, resourceModal, 0)


addResourceButton.addEventListener("click", function() {
    let resourceName = prompt("Enter resource name:", "")
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.className = "status-button"

    if (resourceName === null || resourceName === "") {
        alert("resource creation failed!")
    } else {
        let resource = new Resource(resourceName)
        createData(resource).then(resp => {
            li.innerHTML = resource.name
            document.getElementById("resource-list").appendChild(li).appendChild(button);
            button.addEventListener("click", function() {
                if (confirm("Is this resource a scarcity?")) {
                    li.style.color = "red"
                    resource.update = "scarcity"
                } else {
                    li.style.color = "black"
                    resource.update = "abundance"
                }
            updateData(resource, resp)
            })
        })
    }
})

projects.addEventListener("click", function() {
    toggleHidden(projectMenu)
})

modalSetup("project", addProjectButton, 0)

// functions
// modalSetup needs refactoring, will be used when I switch all forms to modals
function modalSetup(cat, catButton, spanIndex) {
    const form = document.getElementById(`${cat}-form`);
    const span = document.getElementsByClassName("close");
    const modal = document.getElementById(`${cat}Modal`);

    catButton.onclick = function() {
        modal.style.display = "block";
    }
    span[spanIndex].onclick = function() {
        modal.style.display = "none"
    }

    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById(`${cat}-submit`).addEventListener("click", function(e) {
        e.preventDefault()
        let li = document.createElement("li")
        document.getElementById("project-list").appendChild(li)     
        let formElements = Array.from(form.elements)
        const keys = formElements.map(element => element.id)
        const values = formElements.map(element => element.value)
        formElements.forEach(element => element.value = "")
        let formData = {}
        for (let i=0; i < keys.length; i++) {
            if (keys[i] != `${cat}-submit`)
            formData[keys[i]] = values[i]
        }
        modal.style.display = "none"
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
            }
        
        return fetch(`http://localhost:3000/${cat}s`, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            const playerName = document.getElementById(object.player_id).innerHTML
            li.innerHTML = `<strong>${object.name}</strong><br>Description: ${object.description}<br>Player: ${playerName}<br>Weeks Remaining:<li class="weeks">${object.weeks}</li>`
        })

    })
}

function toggleHidden(category) {
    if (category.classList.contains("hidden")) {
        category.classList.remove("hidden")
    } else {
        category.classList.add("hidden")
    }
}

function createData(data) {
    let canUpdate = Object.keys(data.fetchInfo.xtra.updateable)[0]
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": data.fetchInfo.name,
            [canUpdate]: data.fetchInfo.xtra.updateable[canUpdate]
            })
        }

    return fetch(`http://localhost:3000/${data.fetchInfo.xtra.apiLink}`, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            return object.id
        })
}

function updateData(data, resp) {
    
    let configObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data.fetchInfo.xtra.updateable)
    }

    return fetch(`http://localhost:3000/${data.fetchInfo.xtra.apiLink}/${resp}`, configObj)
        .then(function(response) {
            return response.json();
        })
        .catch(function(error) {
            alert("Did not persist to database!");
            console.log(error.message)
        })
}

