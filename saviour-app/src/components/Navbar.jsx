import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <p>Saviour</p>
            </div>
            <div className='links'>
                <ul>
                    <li>Home</li>
                    <li>IDO</li>
                    <li>Takenomics</li>
                    <li>Roadmap</li>
                    <li>Coming Soon</li>
                </ul>
            </div>
            <div className='btn-container'><button className='btn'>Connect Wallet</button></div>
        </nav>
    )
}

export default Navbar