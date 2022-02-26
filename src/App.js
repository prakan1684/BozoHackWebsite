import './App.css';
import { useState } from 'react';
import LoginPage from "./Name";
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

    <div className="App">
      <Home>

      </Home>
    </div> 
  );
}

export default App;