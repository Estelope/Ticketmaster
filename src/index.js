import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TicketMasterEvents from './otherScripts';
//ui

function getEvents(keyWord) {
  TicketMasterEvents.getEvents(keyWord)
    .then(function (response) {
      if (response._embedded) {
        printElements(response, keyWord);
      } else {
        printError(response, keyWord);
      }
    });
}


function printElements(response, keyWord) {
  document.querySelector('#showResponse').innerText = `Results for: ${keyWord} is ${response._embedded.events}.
  < The temperature in Kelvins is ${response.main} degrees.`;
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




