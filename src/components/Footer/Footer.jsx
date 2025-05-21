import React from "react";
import styles from './Footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.mainContainer}>
            
            <div className={styles.textsLeftFooter}>
                <p className={styles.bold}>Suvaco do Cristo</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className={styles.links}>

                <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                    <i className={styles.riInstagramLine}></i><span> Instagram</span>
                </a>
                <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                    <i className={styles.riYoutubeLine}></i><span> Youtube</span>
                </a>
                <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                    <i className={styles.riFacebookBoxLine}></i><span> Facebook</span>
                </a>
            </div>

        </footer>
    );
}