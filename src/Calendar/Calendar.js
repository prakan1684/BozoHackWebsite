import React from 'react';
import './Calendar.css';


function Calendar() {

  var gapi = window.gapi

//should i keep my client id or yours?

  var CLIENT_ID = "841448742087-mmco0sa18nab01lv54ms5vkcd6q6onkm.apps.googleusercontent.com"
  var API_KEY ="AIzaSyA-CRvEE5AIOCqFOQM8fWSK6Q_wqK1Nhs0"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.auth.authorize({
        'apiKey': API_KEY,
        'client_id': CLIENT_ID,
        'discoveryDocs': DISCOVERY_DOCS,
        'scope': SCOPES,
        'immediate': true
      }, (auth) => {
          console.log(gapi.client);
      gapi.client.load('calendar', 'v3', () => console.log('dsa', gapi.client))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }
        console.log(gapi.client);
        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        

        
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        
    

      })
    })
      })
      
  }


  return (
    <div className="Calendar">
      <header className="Calendar-header">
        
        <p>Click to add event to Google Calendar</p>
        <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
      </header>
    </div>
  );
}

export default Calendar;