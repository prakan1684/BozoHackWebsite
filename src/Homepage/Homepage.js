import { useState } from 'react';
import Clock from '../Clock/Clock'
import GoogleLogin from 'react-google-login';

export default function Homepage(){
    let loginInfoLocal = localStorage.getItem('loginInfo');
    
    const [isLoggedIn, updateLoginState] = useState(loginInfoLocal ? true : false); // test for now, change later. Local storage to store login state maybe?
    const [loginInfo, updateLoginInfo] = useState(loginInfoLocal ? JSON.parse(loginInfoLocal) : null); // test for now, change later. Local storage to store login state maybe?

    function handleLogin(res){
        updateLoginInfo(res);
        updateLoginState(true);
        localStorage.setItem('loginInfo', JSON.stringify(res))
    }
    function handleLoginError(res){
        alert('There was an error loading your google account.');
    }
    return (
        <div className='main-content-container'>
            {isLoggedIn ? (
                <div>
                    <Clock></Clock>
                    <h1>Hi {loginInfo.profileObj.name}</h1>
                </div>
            ) : (
                <div>
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
    );
}