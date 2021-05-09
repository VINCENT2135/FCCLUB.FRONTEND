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
  
 
