

 

 

 

document.querySelector("#clubs").addEventListener("click", function(event) {

  var td = event.target;

 

  if ( td.matches("button"))

  {             

   

   //  alert("td.innerHTML " + td.innerHTML)

 

               if (td.innerHTML == "Todo"){      

  //      alert("fetchtodo " + td.value) 

      fetchClubs(td.value)

     }

 

    if (td.innerHTML == "Add" && td.value == "List")

    {         

        alert("add List td.value =" + td.value  ) 

       addList()

     }

              

    if (td.innerHTML == "Add" && td.value != "List")

    {         

        alert("add Todo td.value =" + td.value  ) 

       addTodo(td.value)

    }

              

               if (td.innerHTML == "Delete" )

    {         

 

     //   alert("delete List td.value =" + td.value  ) 

       deleteTodo(td.value)

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

 

