const resources = document.getElementById("resources")
const resourceMenu = document.getElementById("resource-menu")
const addButton = document.getElementById("add-resource")
let statusButtons

resources.addEventListener("click", function() {
    if (resourceMenu.classList.contains("hidden")) {
        resourceMenu.classList.remove("hidden")
    } else {
        resourceMenu.classList.add("hidden")
    }
})

addButton.addEventListener("click", function() {
    let resource = prompt("Enter resource name:", "")
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.className = "status-button"

    if (resource == null || resource == "") {
        alert("resource creation failed!")
    } else {
        createResource(resource).then(resp => {
            let status
            li.innerHTML = resource
            document.getElementById("resource-list").appendChild(li).appendChild(button);
            button.addEventListener("click", function() {
                if (confirm("Is this resource a scarcity?")) {
                    li.style.color = "red"
                    status = "scarcity"
                } else {
                    li.style.color = "black"
                    status = "abundance"
                }
    
            let statusChange = {
                status: status
            };
            
            let configObj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(statusChange)
            }
            fetch(`http://localhost:3000/resources/${resp}`, configObj)
                .then(function(response) {
                    return response.json();
                })
                .then(function(object) {
                    console.log(object)
                })
            })
        })
    }
})

class Resource {
    constructor(name) {
        this.name = name
        this.status = "abundence"
    }

    set status(status) {
        this.status = status;
    }

    get fetchInfo() { 
        return {
        "name": this.name,
        "status": this.status,
        "apiLink": "resources"
        }
    }
}

class Project {
    constructor(name, weeks, player, description) {
        this.name = name
        this.weeks = weeks;
        this.player = player;
        this.description = description;
        this.update = ""
      }

    set update(update) {
        this.update = update;
    }

    get fetchInfo() { 
        return {
        "name": this.name,
        "weeks": this.weeks,
        "player": this.player,
        "description": this.description,
        "update": this.update,
        "apiLink": "projects"
        }
    }
}

function manipulateData(data) {
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data.fetchInfo())
    }

    return fetch(`http://localhost:3000/${data.fetchInfo().apiLink}`, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            return object.id
        })
}
