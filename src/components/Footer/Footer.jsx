import React from "react";
import styles from './Footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.mainContainer}>
            
            <div className={styles.leftContainer}>
                <p className={styles.title}>Suvaco do Cristo</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className={styles.links}>

                <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i><span> Instagram</span>
                </a>
                <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-line"></i><span> Youtube</span>
                </a>
                <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-box-line"></i><span> Facebook</span>
                </a>
            </div>

        </footer>
    );
}