import React from "react";
import '../styles/social-media.css'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import facebookDark from '../images/facebook-dark.png';
import instagramDark from '../images/instagram-dark.png';
import whatsappDark from '../images/whatsapp-dark.png';

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <div className='social-media social-media--dark'>
                <div className="item-dark-container">
                    <img className='social-media-img dark' src={facebookDark} alt='social-media-img' />
                </div>
                <div className="item-dark-container">
                    <img className='social-media-img dark' src={instagramDark} alt='social-media-img' />
                </div>
                <div className="item-dark-container">
                    <img className='social-media-img dark' src={whatsappDark} alt='social-media-img' />
                </div>
            </div>  
            <div className='social-media social-media-color'>
                <div className="item-container">
                    <a href='#'><img className='social-media-img color' src={facebook} alt='social-media-img' /></a>
                </div>
                <div className="item-container">
                    <a href='#'><img className='social-media-img color' src={instagram} alt='social-media-img' /></a>
                </div>
                <div className="item-container">
                    <a href='#'><img className='social-media-img color' src={whatsapp} alt='social-media-img' /></a>
                </div>
            </div>  
        </div>
    )
}

export default SocialMedia;