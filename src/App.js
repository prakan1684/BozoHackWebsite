import './App.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

// #region Components

import LoginPage from "./Login/LoginPage";
import Clock from './Clock/Clock';
import Navbar from './Navbar/Navbar';
import ToDoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';
import Spotify from './Spotify/Spotify';
import WebPlayback from './WebPlayback';
import SpotifyLogin from './SpotifyLogin';
import YoutubeEmbed from './YoutubeEmbed';
// #endregion



function App() {
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
    
    <div className="App">
    

      <div className='navbar-container'>
        <Navbar />
        
        {/* <div className='logo'>
          <img src={props.pfp}/>
        </div> */}
      </div>

      
      <div className='todo-app'>
          <ToDoList />
      </div>


      <Outlet />


    </div> 
  );
}

export default App;