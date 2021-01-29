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
        li.innerHTML = resource
        document.getElementById("resource-list").appendChild(li).appendChild(button);
        button.addEventListener("click", function() {
            if (confirm("Is this resource a scarcity?")) {
                li.style.color = "red"
            } else {
                li.style.color = "black"
            }
        })
        })
        
    }
})
        


function createResource(resource) {
    let resourceData = {
        name: resource,
        status: "abundence"
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(resourceData)
    }

    return fetch("http://localhost:3000/resources", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object)
        })
}