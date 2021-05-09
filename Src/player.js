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
