import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Spotify from './Spotify/Spotify'
import Homepage from './Homepage/Homepage'
import Calendar from './Calendar/Calendar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let URL = '';

ReactDOM.render(
  (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/spotify' element={<Spotify></Spotify>}></Route>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>

        <Route path='*' element={<div className='main-content-container'><p>There's nothing here!</p></div> } />
      </Route>
      
    </Routes>
  </BrowserRouter>
  ),
  document.getElementById('root')
);