class Club {

	constructor(clubname, id) {
		if (clubname != undefined) {
		  this.clubname = clubname;
		  this.id = id;
		
		}
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
		
			.then(r => this.appendClubs(r))
			.catch((error) => {
				alert(error);
				return message(error, "error")
			})
	}
	
	
		insertClub() {
		const clubRow =
			`
  <tr id="trclub${this.id}">
  <td><input id="clubname${this.id}"  value="${this.clubname}" type="text"></td>
	<td></td>
  <td><button name="Club" value="${this.id}" type="button">Update</button></td>
  <td><button name="Club" value="${this.id}" type="button">Delete</button></td>
  <td><button name="Club" value="${this.id}" type="button">Player</button></td>
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
	
		appendClubs(clubs)
		{
		const clubTable = document.getElementById("tbody")

		for (let club of clubs) {
			let club2 = new Club(club.clubname, club.id); 	
			clubTable.innerHTML = clubTable.innerHTML + club2.insertClub()
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
		message(`Club ${club.clubname} added OK`,"success")

              
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









	deleteClub(clubId) {

		fetch(`http://localhost:3000/clubs/${clubId}`, {
				method: "DELETE"
			})
			.then(r => r.json())
			.then(m => {
				var row = document.getElementById(`trclub${clubId}`)
				row.remove()
				message(`Club ${club.clubId} deleted OK`,"success")
				return
		
			})
	}


}






