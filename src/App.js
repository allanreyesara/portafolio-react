import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Routers } from './components/Routes'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className="body-container">
          <Routers />
        </div>
           
      </div>
    </Router> 
  );
}

export default App;
