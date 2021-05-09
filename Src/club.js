class Club {
	constructor() {

	}


	fetchClubs() {

		const th0 = document.getElementById("th0")
		th0.innerHTML = "Club Names"

		const th99 = document.getElementById("headrow")
		th99.insertCell(4).innerHTML = "<b>Player</b>"

		fetch("http://localhost:3000/clubs")
			.then(r => {
				if (r.ok)
					return r.json()
				else
					throw new Error(r.statusText)
			})
			//.then(appendClubs)
			.then(r => this.appendClubs(r))
			.catch((error) => {
				alert(error);
				return message(error, "error")
			})
	}
	
	
	appendClubs(clubs) {
		const clubTable = document.getElementById("tbody")

		for (let club of clubs) {
			clubTable.innerHTML = clubTable.innerHTML + this.insertClub(club)
		}
		clubTable.innerHTML = clubTable.innerHTML + this.insertClubAdd()

	}

