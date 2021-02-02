const list = document.getElementById("player-list")
document.getElementById("add-player").addEventListener('click', function() {
    const playerName = prompt("Enter player name:")
    const li = document.createElement("li")
    const listOption = document.createElement("OPTION")
    if (playerName === null || playerName === "") {
        alert("You've gotta have some sort of identifier!")
    } else {
        const player = new Player(playerName)
        createData(player).then(resp => {

            li.innerHTML = player.name
            listOption.innerHTML = player.name
            listOption.value = resp
            listOption.id = resp
            if (list.classList.contains("hidden")) {
                list.classList.remove("hidden") //add transition time here
                }
            document.getElementById("players").appendChild(li);
            document.getElementById("player_id").appendChild(listOption)
        })
    }
})