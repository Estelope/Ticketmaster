//business logic
export default class TicketMasterEvents {
  static getEvents(keyWord) {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyWord=${keyWord}&apikey=${process.env.API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
}
}