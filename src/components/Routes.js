
import React, { Component }  from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { About } from './About';
import { App } from '../App';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export function Routers(){
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>

        
    )
}

export default Routers;