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
	
	
		insertClub(club) {
		const clubRow =
			`
  <tr id="trclub${club.id}">
  <td><input id="clubname${club.id}"  value="${club.clubname}" type="text"></td>
	<td></td>
  <td><button name="Club" value="${club.id}" type="button">Update</button></td>
  <td><button name="Club" value="${club.id}" type="button">Delete</button></td>
  <td><button name="Club" value="${club.id}" type="button">Player</button></td>
  </tr>
  `
		return clubRow
	}

	insertClubAdd() {
		const clubRow =
			`   
   <tr id="trclub999">
   <td><input id="clubname999"  value="" type="text"></td>
   <td><button id="add999" name="Club" value="Club" type="button">Add</button></td>
   </tr>
  `
		return clubRow

	}
	
		appendClubs(clubs) {
		const clubTable = document.getElementById("tbody")

		for (let club of clubs) {
			clubTable.innerHTML = clubTable.innerHTML + this.insertClub(club)
		}
		clubTable.innerHTML = clubTable.innerHTML + this.insertClubAdd()

	}


	addClub() {

  const newName = document.getElementById("clubname999").value

		const body = {
			club: {
				clubname: newName
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

		fetch("http://localhost:3000/clubs", options)
			.then(r => r.json())
			.then(r => this.appendClub(r))

	}
	
		appendClub(club) {
		const clubTable = document.getElementById("tbody")

		var row = document.getElementById("trclub999")
		row.parentNode.removeChild(row)

		clubTable.innerHTML = clubTable.innerHTML + this.insertClub(club)
		clubTable.innerHTML = clubTable.innerHTML + this.insertClubAdd()

	}

		updateClub(clubId) {

		const newName = document.getElementById(`clubname${clubId}`).value

		const body = {
			club: {
				clubname: newName
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

		fetch(`http://localhost:3000/clubs/${clubId}`, options)
			.then(r => r.json())
			.then(m => {
				document.getElementById(`clubname${clubId}`).innerHTML = newName
			})
	}

