

 

document.querySelector("#clubs").addEventListener("click", function(event) {

  var td = event.target;

 

  if ( td.matches("button"))

  {             

   
  
 

               if (td.innerHTML == "Todo"){      



      fetchClubs(td.value)

     }

 

    if (td.innerHTML == "Add" && td.value == "List")

    {         

        alert("add Club td.value =" + td.value  ) 

       addClub()

     }

              

    if (td.innerHTML == "Add" && td.value != "Club")

    {         

        alert("add Todo td.value =" + td.value  ) 

       addPlayer(td.value)

    }

              

               if (td.innerHTML == "Delete" )

    {         

 

     //   alert("delete List td.value =" + td.value  ) 

       deleteTodo(td.value)

     }

              

  }

});

 

function fetchClubs()

{

  const th = document.getElementById("th0")

   th.innerHTML = "Clubs"

 

  fetch("http://localhost:3000/clubs")

  .then(r => r.json())

  //  .then(r => appendLists(r))  or the next

  .then(appendLists)

}

 
