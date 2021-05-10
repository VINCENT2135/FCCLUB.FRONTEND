class Player {
	constructor() {
		
	}
	
	fetchPlayers(club) {
		const th0 = document.getElementById("th0")
		const name = document.getElementById(`clubname${club}`)
		th0.innerHTML = "Players for : " + name.value

		const th99 = document.getElementById("headrow")
		th99.deleteCell(4);

		fetch("http://localhost:3000/players/" + club)
			.then(r => r.json())
		
			.then(data => {
				return this.appendPlayers(data, club)
			})
	}
  
 
insertPlayer(player) {
		const playerRow =
			`
  <tr id="trplayer${player.id}">
  <td><input id="playername${player.id}" value="${player.playername}" type="text"></td>
	 <td></td>
  <td><button name="Player" value="${player.id}" type="button">Update</button></td>
  <td><button name="Player" value="${player.id}" type="button">Delete</button></td>
  </tr>
  `
		return playerRow
	}

	insertPlayerAdd(club_id) {
		const playerRow =
			`   
   <tr id="trplayer999">
   <td><input id="playername999" value="" type="text"></td>
   <td><button id="add999" name="Player" value="${club_id}" type="button">Add</button></td>
   <td colspan="2" style="text-align:center"><button name="ShowClub" type="button">Show Clubs</button></td>
   </tr>
  `
		return playerRow
	}
	
	appendPlayers(players, club_id) {
		const playerTable = document.getElementById("tbody")

		playerTable.innerHTML = ""

		for (let player of players) {
			playerTable.innerHTML = playerTable.innerHTML + this.insertPlayer(player)
		}
		playerTable.innerHTML = playerTable.innerHTML + this.insertPlayerAdd(club_id)
	}


	appendPlayer(player) {
		const playerTable = document.getElementById("tbody")

		var row = document.getElementById("trplayer999")
		row.parentNode.removeChild(row)

		playerTable.innerHTML = playerTable.innerHTML + this.insertPlayer(player)
		playerTable.innerHTML = playerTable.innerHTML + this.insertPlayerAdd(player.club_id)

	}
	
	
	addPlayer(club_id) {

		const newContent = document.getElementById("playername999").value


		const body = {
			player: {
				club_id: club_id,
				playername: newContent
			}
		}

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(body)
		}

		fetch("http://localhost:3000/players", options)
			.then(r => r.json())
			.then(r => this.appendPlayer(r))

	}

	updatePlayer(playerId) {

		const newContent = document.getElementById(`playername${playerId}`).value

		const body = {
			player: {
				playername: newContent
			}
		}
		const options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(body)
		}
		fetch(`http://localhost:3000/players/${playerId}`, options)
			.then(r => r.json())
			.then(m => {
				document.getElementById(`playername${playerId}`).innerHTML = newContent
			})
	}
