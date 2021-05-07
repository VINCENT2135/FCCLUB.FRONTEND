document.querySelector("#players").addEventListener("click", function(event) {
   var td = event.target;
   if ( td.matches("button")) 
   {	  
 
     if (td.innerHTML == "Player"){	
      //   alert("fetchplayer " + td.value)  
       fetchPlayers(td.value) 
      }
   
     if (td.innerHTML == "Add" && td.value == "Club")
     {	
         alert("add Club td.value =" + td.value  )  
        addClub() 
      }
     if (td.innerHTML == "Add" && td.value == "Player")
     {	
         alert("add Player td.value =" + td.value  )  
        addPlayer() 
      }
   }
 });
 
 function fetchClubs()
 {
   const th = document.getElementById("th0")
    th.innerHTML = "Club Names"
 
   fetch("http://localhost:3000/clubs")
   .then(r => r.json())
   //  .then(r => appendClubs(r))  or the next
   .then(appendClubs) 
 }
 
 function fetchPlayers(club)
 {
   // alert("fetchPlayers")
    const th = document.getElementById("th0")
    th.innerHTML = "Content"
 
    // alert(club)
   fetch("http://localhost:3000/players/" + club)
   .then(r => r.json())
   //  .then(r => appendClubs(r))  or the next
   .then(appendPlayers) 
 }
 
 function appendPlayers(players)
 {
 //	alert("appendPlayers")
    const playerTable = document.getElementById("tbody")
     
    playerTable.innerHTML = ""
    
    for (let player of players)
    {
      // alert(JSON.stringify(club.players))
      let players=JSON.stringify(player)
    //  alert(players)
      
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
    //  alert(playera)
      
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
 
fetchClubs() 


