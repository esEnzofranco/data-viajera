import React from 'react';
import '../styles/header.css';
import logo from '../images/palm-tree.png';
import SocialMedia from './social-media';

const Header = () => {

    return (
        <div id='header'>
            <a id='header-a' href='/'>
                <div id='brand-container'>
                    <img id='logo' src={logo} alt='logo' />
                    <p id='site-title'>Data Viajera</p>
                    <p id='site-subtitle'>viajá... el dinero vuelve ¡la vida no!</p>
                </div>
            </a>
            <SocialMedia />
        </div>
    )
}

export default Header;