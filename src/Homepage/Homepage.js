import { useState, useEffect } from 'react';
import Clock from '../Clock/Clock'
import GoogleLogin from 'react-google-login';
import './Homepage.css'
// import axios from 'axios';

export default function Homepage(props){
    let loginInfoLocal = localStorage.getItem('loginInfo');
    
    const [isLoggedIn, updateLoginState] = useState(loginInfoLocal ? true : false); // test for now, change later. Local storage to store login state maybe?
    const [loginInfo, updateLoginInfo] = useState(loginInfoLocal ? JSON.parse(loginInfoLocal) : null); // test for now, change later. Local storage to store login state maybe?
    const [isLoading, updateLoadingState] = useState(false);
    const [randomQuote, updateRandomQuote] = useState({quotes: [{text: 'Test', author: 'Test'}]});

    // useEffect(() => {
    //     const getQuote = async () => {
    //         try{
    //             const req = await fetch(`https://www.googleapis.com/calendar/v3/users//calendarList/`);
    //             const response = await req.json();
                
    //             console.log(response);
    //         }
    //         catch(e){
    //             console.log('This is ' + e);
    //         }
    //     }
    //     getQuote();
    // }, []);


    function handleLogin(res){
        updateLoginInfo(res);
        updateLoginState(true);
        localStorage.setItem('loginInfo', JSON.stringify(res));
        
    }
    function handleLoginError(res){
        alert('There was an error loading your google account.');
    }


    useEffect(() => {
        const getQuote = async () => {
            updateLoadingState(true);
            try{
                const req = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
                const response = await req.json();
                
                updateRandomQuote(Math.random() > 0.01 ? response : {quotes: [
                    {text: 'I need to finger my ass.', author: 'Bradley'}]
                });
            }
            catch(e){
                console.log('This is ' + e);
            }
            
            updateLoadingState(false);
        }
        getQuote();
    }, []);

    return (
        <div className='main-content-container'>
            <div className='homepage-main-container'>
                {isLoggedIn ? (
                    <div className='logged-in-homepage'>
                        <h1>Hi {loginInfo.profileObj.name}</h1>
                        <Clock></Clock>
                        <div className='homepage-quote'>
                            <p className='quote-content'>{randomQuote.quotes[0].text}</p>
                            <p className='author'>- {randomQuote.quotes[0].author}</p>
                        </div>
                        <div className='homepage-middle-container'>
                            
                        </div>
                    </div>
                ) : (
                    <div style={{marginLeft: '200px'}}>
                        <GoogleLogin
                            clientId='841448742087-mmco0sa18nab01lv54ms5vkcd6q6onkm.apps.googleusercontent.com'
                            buttonText="Log in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleLoginError}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                )}
            </div>
            
        </div>
    );
}