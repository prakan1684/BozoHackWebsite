import './App.css';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

// #region Components

import LoginPage from "./Login/LoginPage";
import Clock from './Clock/Clock';
import Navbar from './Navbar/Navbar';
import ToDoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';

// #endregion



function App() {


  // function onSignIn(googleUser) {
  //   let profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  return (

    <div className="App">


      <div className='navbar-container'>
        <Navbar />
      </div>

      <div className='dsa'>This is a test</div>


      {/* <div className="g-signin2" data-onsuccess="onSignIn">Sign In</div>
      <div className='clock-container'>
        <div className='clock'>
            <Clock className='clock-text'></Clock>
        </div>
      </div> */}

      {/* <div className='todo-app'>
          <ToDoList/>
      </div>  */}
    </div> 
  );
}

export default App;