

 

 

 

document.querySelector("#clubs").addEventListener("click", function(event) {

  var td = event.target;

 

  if ( td.matches("button"))

  {             

   

   //  alert("td.innerHTML " + td.innerHTML)

 

               if (td.innerHTML == "Todo"){      

  //      alert("fetchtodo " + td.value) 

      fetchClubs(td.value)

     }

 

    if (td.innerHTML == "Add" && td.value == "Club")

    {         

        alert("add Club td.value =" + td.value  ) 

       addClub()

     }

              

    if (td.innerHTML == "Add" && td.value != "Club")

    {         

        alert("add Player td.value =" + td.value  ) 

       addPlayer(td.value)

    }

              

               if (td.innerHTML == "Delete" )

    {         

 

     //   alert("delete List td.value =" + td.value  ) 

       deletePlayer(td.value)

     }

              

  }

});

 

function fetchClub()

{

  const th = document.getElementById("th0")

   th.innerHTML = "Club Names"

 

  fetch("http://localhost:3000/clubs ")

  .then(r => r.json())

  //  .then(r => appendLists(r))  or the next

  .then(appendClubs)

}


function appenndClubs(clubs,player_id)
{
  const clubTable = document.getElementById("tbody")
  todoClub.innerHTML = ""
  for (let club of clubs)

  club_id = player_id

} 













 

