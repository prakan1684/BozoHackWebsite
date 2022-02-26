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


  

  return (

    <div className="App">


      <div className='navbar-container'>
        <Navbar />
      </div>

      


      {/* <div className="g-signin2" data-onsuccess="onSignIn">Sign In</div>
      <div className='clock-container'>
        <div className='clock'>
            <Clock className='clock-text'></Clock>
        </div>
      </div> */}

      {/* <div className='todo-app'>
          <ToDoList/>
      </div>  */}

      <Outlet />
    </div> 
  );
}

export default App;