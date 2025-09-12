import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/image 1(2).svg'; 

export default function Header() {
    return (
        <header className={styles.mainContainer}>
            <img src={logo} alt="Logo do Suvaco do Cristo" />
            <h1><a href="/">Suvaco do Cristo</a></h1>
            <div className={styles.headerLinks}>
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
    );
}
