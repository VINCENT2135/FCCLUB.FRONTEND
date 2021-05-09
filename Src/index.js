document.querySelector("#players").addEventListener("click", function(event) {
    var td = event.target;
  
    if (td.matches("button")) {
  
      if (td.name == "Club") {
        if (td.innerHTML == "Player")
          fetchPlayers(td.value)
        if (td.innerHTML == "Add")
          addClub()
        if (td.innerHTML == "Delete")
          deleteClub(td.value)
        if (td.innerHTML == "Update")
          updateClub(td.value)
      }
  
      if (td.name == "Player") {
        if (td.innerHTML == "Add")
          addPlayer(td.value)
  
        if (td.innerHTML == "Delete")
          deletePlayer(td.value)
  
        if (td.innerHTML == "Update")
          updatePlayer(td.value)
  
      }
    }
  });
  
  function fetchClubs() {
    const th = document.getElementById("th0")
    th.innerHTML = "Club Names"
  
    fetch("http://localhost:3000/clubs")
      .then(r => r.json())
      .then(appendClubs)
  }
  
  function fetchPlayers(club) {
    const th = document.getElementById("th0")
    th.innerHTML = "Content"
  
    fetch("http://localhost:3000/players/" + club)
      .then(r => r.json())
      .then(function(data) {
        return appendPlayers(data, club)
      })
   
  }
  
  function insertClub(club) {
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
  
  

  function appendPlayers(players)
  {
  
     const playerTable = document.getElementById("tbody")
      

     playerTable.innerHTML = ""
     
     for (let player of players)
     {
     
       let players=JSON.stringify(player)
     
       
        const playerRow =
        `
        <tr id="tr${player.id}">
        <td><input id="name${player.id}"  value="${player.playername}" type="text"></td>
       <td></td>
        <td><button id="update${player.id}" type="button">Update</button></td>
        <td><button id="delete${player.id}" type="button">Delete</button></td>
        </tr>
        `
        playerTable.innerHTML = playerTable.innerHTML +  playerRow
     }
     
     playerTable.innerHTML = playerTable.innerHTML +
     `   
        <tr id="tr${999}">
        <td><input id="name999"  value="" type="text"></td>
        <td><button id="add999" value="${player.Club_id}" type="button">Add</button></td>
        </tr>
     ` 
         
  }
  
  function appendClubs(clubs)
  {
     const clubTable = document.getElementById("tbody")
  
     for (let club of clubs)
     {
       // alert(JSON.stringify(club.players))
       let players=JSON.stringify(club)
     
       
        const clubRow =
        `
        <tr id="tr${club.id}">
        <td><input id="name${club.id}"  value="${club.clubname}" type="text"></td>
       <td></td>
        <td><button id="update${club.id}" type="button">Update</button></td>
        <td><button id="delete${club.id}" type="button">Delete</button></td>
        <td><button id="player${club.id}" value="${club.id}" type="button">Player</button></td>
        </tr>
        `
        clubTable.innerHTML = clubTable.innerHTML +  clubRow
     }
     clubTable.innerHTML = clubTable.innerHTML +
     `   
        <tr id="tr${999}">
        <td><input id="name999"  value="" type="text"></td>
        <td><button id="add999" value="Club" type="button">Add</button></td>
        </tr>
     ` 
         
  }
  
  function addClub() {
  
     const newName = document.getElementById("name999").value
     
     alert ("addclub" + newName)
    const body = {
        club: {clubname: newName }
        }
  
     alert ("44 body" + body)
     
      const options = 
     {
        method: "POST",
         headers: {"Content-Type" : "application/json", Accept : "application/json"},
        body: JSON.stringify(body)
      }	
  
      fetch("http://localhost:3000/clubs", options)
      .then(r => r.json())
      .then(appendClub) 
     
  }
  
 fetchClubs() 
 

       const clubRow =
       `
       <tr id="tr${club.id}">
       <td><input id="name${club.id}"  value="${club.clubname}" type="text"></td>
      <td></td>
       <td><button id="update${club.id}" type="button">Update</button></td>
       <td><button id="delete${club.id}" type="button">Delete</button></td>
       <td><button id="player${club.id}" value="${club.id}" type="button">Player</button></td>
       </tr>
       `
       clubTable.innerHTML = clubTable.innerHTML +  clubRow
    }
    clubTable.innerHTML = clubTable.innerHTML +
    `   
       <tr id="tr${999}">
       <td><input id="name999"  value="" type="text"></td>
       <td><button id="add999" value="Club" type="button">Add</button></td>
       </tr>
    ` 
        
 }
 
 function addClub() {
 
    const newName = document.getElementById("name999").value
    
    alert ("addclub" + newName)
   const body = {
       club: {clubname: newName }
       }
 
    alert ("44 body" + body)
    
     const options = 
    {
       method: "POST",
        headers: {"Content-Type" : "application/json", Accept : "application/json"},
       body: JSON.stringify(body)
     }	
 
     fetch("http://localhost:3000/clubs", options)
     .then(r => r.json())
     .then(appendClub) 
    
 }
 
fetchClubs() 



