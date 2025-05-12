import React from "react";
import frameImage from '../../components/imgs/Header-BG(3).svg';

import Nav from '../../components/nav/Nav'
import './header.css'

function Header() {
    return (
        <div className="header-container">
            <Nav/>
            <header>
                <h1><a href="/">Suvaco do Cristo</a></h1>
                <img src={frameImage} alt="Frame" className="header-image" />
                <div className="header-links">
                    <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-line"></i>
                    </a>
                    <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-box-line"></i>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;
