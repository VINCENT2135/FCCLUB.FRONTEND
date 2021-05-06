 


document.querySelector("#todos").addEventListener("click", function(event) {

 var td = event.target;


})  


function fetchClubs()

{

  const th = document.getElementById("")

   th.innerHTML = "Club Names"

 

  fetch("http://localhost:3000/lists")

  .then(r => r.json())



  .then(appendLists)

}





