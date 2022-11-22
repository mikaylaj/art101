/*
 * Author: Mikayla & Jaq
 * Created: 14 Nov
 * License: Public Domain
 */
 // attach click action to button
 var button = document.getElementById('my-button');
   button.addEventListener('click', function()
 This to index
 <button id="my-button">Click Me</button>
 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://yourapiendpoint.com/",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)
             id: 123,
             api_key: "blahblahblah",
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
 const refreshRandom = () => {

    fetch('/api/random')
    .then((response) => response.json())
    .then((data) => {
      console.log('Response:', data)
        let currData = data[0];
        document.getElementById("clueValue").textContent = currData.value;
        document.getElementById("clueCategory").textContent = currData.category.title;
        document.getElementById("clueQuestion").textContent = currData.question;
        document.getElementById("clueAnswer").textContent = currData.answer;
        document.getElementById("clueAirDate").textContent = currData.airdate;
        document.getElementById("clueId").textContent = currData.id;
        document.getElementById("clueRaw").textContent = JSON.stringify(currData);
    });
  };


  document.getElementById('refresh-question').addEventListener('click', () => {
    refreshRandom();
  });

  refreshRandom();
