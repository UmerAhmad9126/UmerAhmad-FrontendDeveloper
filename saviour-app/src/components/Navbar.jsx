import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import tabmenu from "../assets/tabler_menu-2.svg";

const Navbar = () => {
    return (
        <>
            {/* Desktop Nav */}
            <nav className='desk-navbar'>
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

            {/* Mobile Nav */}

            <nav className='mobile-navbar'>

                <div className='logo'>
                    <img src={tabmenu} alt={"tabmenu"} className='tab-menu' />
                    <img src={logo} alt="logo" className='logo-img' />
                    <p>Saviour</p>
                </div>

                <div className='btn-container'>
                    <button className='mobile-btn'>Connect Wallet</button>
                </div>

            </nav>

        </>





    )
}

export default Navbar