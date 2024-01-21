import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                SG Web Dev
            </div>
            <nav className="navbar">
                <NavLink to="/" activeclassname="active">About</NavLink>
                <NavLink to="/skills" activeclassname="active">Skills</NavLink>
                <NavLink to="/projects" activeclassname="active">Projects</NavLink>
                <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
