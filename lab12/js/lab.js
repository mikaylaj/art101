/*
Author: Jaq and Mikayla
* Created: 19 September
* License: Public Domain
*/
// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//depending on length mod 4
function sortingHat(str){
  var len = str.length;
  var mod = len % 4;
  if(mod == 0){
    return ("Gryffindor");
  }
  else if (mod ==1){
    return ("Ravenclaw");
  }
  else if (mod ==2){
    return ("Slytherin");
  }
  else {
    return ("Hufflepuff");
  };
}


$("#button").click(function() {
  var name = $("#input").val();
  var userHouse = sortingHat(name);
  $("#output").html("here is your house; "+userHouse);
});



// var myButton = document.getElementByID("button");
// myButton.addEventListener("click", function(){
//   var name = document.getElementByID("input").value;
//   var house = sortingHat(name);
//   newText= house;
//   document.getElementByID("output").innerHTML = newText;
// });
