import React from 'react';
import '../styles/header.css';
import logo from '../images/palm-tree.png';
import SocialMedia from './social-media';

const Header = () => {

    return (
        <div className='header'>
            <a className='header-a' href='#'>
                
                <div className='brand-container'>
                    <div className='brand-background'></div>
                    <img className='logo' src={logo} alt='logo' />
                    <p className='title'>Data Viajera</p>
                    <p className='subtitle'>viajá... el dinero vuelve ¡la vida no!</p>
                </div>
            </a>
            <SocialMedia />
        </div>
    )
}

export default Header;