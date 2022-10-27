/**
 * Author: Mikayla Jordan & Jaq Moore
 * Created: October 2022
 * License: public domain

 **/

 // Define Variables
 My transport=["Volkswagen Golf", "bus", "walk"]
myMainRide ={
  make: "Volkswagen"
  model: "golf"
  color: "Cherry Red"
  year: 1995
  age: function()  {
 return 2022 - age;
  }
}

//output
document.writeln("kinds of transport I use:", myTransport,"</br>");
document.writeln("my Main Ride:<pre>");
 JSON.stringify(myMainRide, null,'/t'),"<pre/>");
 
