import './Home.css';
import { useState } from 'react';



const Home  = () => {
    const [isLoggedIn, updateLoginState] = useState(false); // test for now, change later. Local storage to store login state maybe?
    const [loginInfo, updateLoginInfo] = useState({
    name: 'Brad'
    });  

    function login(){

    }
    return(
    
        <nav>
            <div className='left-side-container'>
                <img src='https://www.svgrepo.com/show/30963/cookie.svg'/>
                <h1>App Name</h1>
            </div>
            <div className='right-side-container'>
                <div className='right-inner-container'>
                    {!isLoggedIn ? 
                    (<button className='styled-btn' onClick={login}>Login</button>) : 
                    (<p>{loginInfo.name}</p>)
                    }
                </div>
            </div>
        </nav>

    

    )}

export default Home;