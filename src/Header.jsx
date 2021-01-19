import React from 'react';
import logo from './images/logo1.png';
import './App.css';




const Header = () => {
    return (
        <>
            <div className="header_div">
                <img alt='logo' src={logo} className="image" />
                <h1 className="heading">Google Keep</h1>
            </div>
        </>
    );
};

export default Header;