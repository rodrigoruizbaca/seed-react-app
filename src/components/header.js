import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

export default Header => (
    <div>
        <h1>Porftolio</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="portfolio/123">Porftolio</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </div>
);
