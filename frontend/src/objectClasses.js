class Resource {
    constructor(name) {
        this.name = name
        this.status = "abundence"
    }

    set update(status) {
        this.status = status;
    }

    get fetchInfo() { 
        return {
        "name": this.name,
        "xtra": {
            "updateable": {"status": this.status},
            "apiLink": "resources"
            }
        }
    }
}

class Project {
    constructor(name, weeks, player, description) {
        this.name = name
        this.weeks = weeks;
        this.player = player;
        this.description = description;
        this.update = "";
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
        "xtra": {
            "updateable": {"update": this.update},
            "apiLink": "projects"
            }
        }
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.playerID = ""
    }

    set playerID(id) {
        this.id = id
    }

    get fetchInfo() { 
        return {
        "name": this.name,
        "xtra": {
            "updateable": {"id": this.playerID},
            "apiLink": "players"
            }
        }
    }
}