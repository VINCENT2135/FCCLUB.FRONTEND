document.querySelector("#players").addEventListener("click", function(event) {
	var td = event.target;

	if (td.matches("button")) {

		if (td.name == "ShowClub") {
			let playerTable = document.getElementById("tbody")

			playerTable.innerHTML = ""
			objClub.fetchClubs()
		} else
		if (td.name == "Club") {
			if (td.innerHTML == "Player")
				objPlayer.fetchPlayers(td.value)
			if (td.innerHTML == "Add")
				objClub.addClub()
			if (td.innerHTML == "Delete")
				objClub.deleteClub(td.value)
			if (td.innerHTML == "Update")
				objClub.updateClub(td.value)
		} else
		if (td.name == "Player") {
			if (td.innerHTML == "Add")
				objPlayer.addPlayer(td.value)

			if (td.innerHTML == "Delete")
				objPlayer.deletePlayer(td.value)

			if (td.innerHTML == "Update")
				objPlayer.updatePlayer(td.value)

		}
	}
});

function message(message, type) {
	const id = document.getElementById("message")

	id.className = type
	id.innerHTML = message

	setTimeout(function(a) {
		id.className = "";
		id.innerHTML = " "
	}, 2000)

}

objPlayer = new Player()
objClub = new Club()
objClub.fetchClubs()
