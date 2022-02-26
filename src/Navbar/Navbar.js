import './Navbar.css';
import NavbarItem from './NavbarItem'
import { useState } from 'react';
import { FaBars, FaWindowMinimize } from 'react-icons/fa';

export default function Navbar(){
    const [navbarOpen, updateNavbarState] = useState(false);

    let navItems = [
      {name: 'Home', url: '/', index: 0},
      {name: 'Spotify', url: '/spotify', index: 1}
    ];

    function toggleNavBar(){
      updateNavbarState(!navbarOpen);
    }

    return (
      <nav className={'navbar ' + (navbarOpen ? 'open' : 'closed')}>
        {navbarOpen ? 
        
        <FaWindowMinimize className='navbar-btn ' onClick={toggleNavBar} /> : 
        
        <FaBars className='navbar-btn' onClick={toggleNavBar} />
        
        }

        { navbarOpen ? 
          <ul className='nav-items'>
            {
              navItems.map((el) =>  
                <NavbarItem  props={el} key={el.index}/>
              )
            }
          </ul> : ''
        }
      </nav>
    );


    // const [loginInfo, updateLoginInfo] = useState({
    // name: 'Dyldo'
    // });  
    

    // var gapi = window.gapi
    // var CLIENT_ID = "946540670850-pnls8fkll1n9s83fgb1spcmrpvrs65rb.apps.googleusercontent.com"
    // var API_KEY = "AIzaSyDE4w1AU7s2DP7HnE7fIarnUL_hfO4THZA"
    // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    // var SCOPES = "https://www.googleapis.com/auth/calendar.events"





    // function handleClick() {
    //     gapi.load('client:auth2', () => {
    //         console.log('loading')

    //         gapi.client.init({
    //             apiKey: API_KEY,
    //             clientId: CLIENT_ID,
    //             discoveryDocs: DISCOVERY_DOCS,
    //             scope: SCOPES,
    //         })

    //         gapi.client.load('calendar', 'v3', () => console.log('bam!'))

    //         gapi.auth2.getAuthInstance().signIn()
    //         .then(() => {
    //             var event = {
    //                 'summary': 'Google I/O 2015',
    //                 'location': '800 Howard St., San Francisco, CA 94103',
    //                 'description': 'A chance to hear more about Google\'s developer products.',
    //                 'start': {
    //                   'dateTime': '2015-05-28T09:00:00-07:00',
    //                   'timeZone': 'America/Los_Angeles'
    //                 },
    //                 'end': {
    //                   'dateTime': '2015-05-28T17:00:00-07:00',
    //                   'timeZone': 'America/Los_Angeles'
    //                 },
    //                 'recurrence': [
    //                   'RRULE:FREQ=DAILY;COUNT=2'
    //                 ],
    //                 'attendees': [
    //                   {'email': 'lpage@example.com'},
    //                   {'email': 'sbrin@example.com'}
    //                 ],
    //                 'reminders': {
    //                   'useDefault': false,
    //                   'overrides': [
    //                     {'method': 'email', 'minutes': 24 * 60},
    //                     {'method': 'popup', 'minutes': 10}
    //                   ]
    //                 }
    //               };
    //               var request = gapi.client.calendar.events.insert({
    //                   'calendarId': 'primary',
    //                   'resource': event,
    //               })

    //               request.execute(event => {
    //                   window.open(event.htmlLink)
    //               })
            
    //         })
    //     })
    // }


    // return(
    // <div>
    //     <nav>
    //         <div className='left-side-container'>
    //             <img src='https://www.svgrepo.com/show/30963/cookie.svg'/>
    //             <h1>Welcome User</h1>
    //         </div>
    //         <div className='right-side-container'>
    //             <div className='right-inner-container'>
    //                 <button className='styled-btn' onClick={handleClick}>
    //                     Add an event to Google Calendar
    //                 </button>
    //             </div>
                
    //         </div>
    //     </nav>
        
        
    // </div>
        

    

    // )
}