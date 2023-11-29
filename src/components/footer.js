import React from "react";
import '../styles/footer.css';
import palmTree from '../images/palm-tree.png';
import SocialMedia from './social-media.js';

const Footer = () => {
    return (
        <div id="footer">
            <a className="footer-brand" href="/">
                <p>Data Viajera</p>
                <img className="footer-image" src={palmTree} alt="footer-image" />
            </a>
            <SocialMedia />
        </div>
    )
}

export default Footer;