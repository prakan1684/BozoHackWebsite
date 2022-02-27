import React, { useState, useEffect } from 'react';
import WebPlayback from '../WebPlayback';
import SpotifyLogin from '../SpotifyLogin'

function Spotify(){
    const [token, setToken] = useState('');

    useEffect(() => {

        async function getToken() {
            const response = await fetch('/auth/token');
            const json = await response.json();
            setToken(json.access_token);
        }

    getToken();

    }, []);


    return (
        <>
            { (token === '') ? <SpotifyLogin/> : <WebPlayback token={token} /> }
        </>
    );
}

export default Spotify;