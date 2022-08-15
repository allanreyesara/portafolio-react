
import React, { Component }  from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export function Routers(){
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

        
    )
}

export default Routers;