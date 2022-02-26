import './App.css';
import { useState } from 'react';
import LoginPage from "./Name";
import Clock from './Clock';
import Navbar from './Navbar';
import ToDoList from './ToDoComp/TodoList';
import TodoForm from './ToDoComp/TodoForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  

  return (

    <div className="App">
      <div className='navbar-container'>
        <Navbar className='navbar-home'>

        </Navbar>
      </div>
      <div className='clock-container'>
        <div className='clock'>
            <Clock className='clock-text'></Clock>
        </div>
      </div>

      <div className='todo-app'>
          <ToDoList/>
      </div> 
    </div> 
  );
}

export default App;