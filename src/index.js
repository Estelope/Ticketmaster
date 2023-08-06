import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TicketMasterEvents from './otherScripts';
//ui

function getEvents(keyWord) {
  TicketMasterEvents.getEvents(keyWord)
    .then(function (response) {
      if (response._embedded.events) {
        printElements(response, keyWord);
      } else {
        printError(response, keyWord);
      }
    });
}


function printElements(response, keyWord,) {
  let eventNames = '';
  const events = response._embedded.events;
  for (let event of events) {
    eventNames += event.name + ', ';
    
  }
  document.querySelector('#showResponse').innerText = `Results for: ${keyWord} is ${eventNames}.`;

}

function printError(error, keyWord) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the event data for ${keyWord}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const keyWord = document.querySelector('#keyWord').value;
  document.querySelector('#keyWord').value = null;
  getEvents(keyWord);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});




//$.get('http://your-api-url/', function(data) {
//    $.each(data, function(index, value) {
        // Access the data you need here
        // For example, to access the 'address' property of each object:
//        var address = value.address;
        // You can then pass this data to another function or do something with it
//    });
//});
