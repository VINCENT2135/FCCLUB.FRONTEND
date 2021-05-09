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
