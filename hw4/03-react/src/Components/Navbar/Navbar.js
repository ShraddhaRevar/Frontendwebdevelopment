import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'; 


const Navbar = () => {

    return (
        <nav className ="navbar">
            <h2 className ="logo">GOT WORLD!</h2>
            <ul className="links">
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/search" className="search">
                    <li>Search</li>
                </Link>
                <Link to="/house" className="house">
                    <li>House</li>
                </Link>
            </ul>
            
        </nav>
    );
}; 
export default Navbar;