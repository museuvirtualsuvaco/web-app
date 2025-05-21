import React from "react";
import './Header.css'

export default function Header() {

    return <>
        <header>
            <img src="src\assets\image 1(2).svg" alt="" />
            <h1>Suvaco do Cristo</h1>
            <div className="header-links">
                    <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i> Instagram 
                    </a>
                    <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-line"></i> Youtube
                    </a>
                    <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-box-line"></i> Facebook
                    </a>
                </div>
        </header></>
}