import React from "react";
import styles from './Nav.module.css'

export default function Nav(){
    return (
        <nav className={styles.mainContainer}>
            <ul>
                <img className={styles.navIcon} src="" alt="icone aqui" />
                <div className={styles.liItens}>
                    <li>Início</li>
                    <li>Projeto Social</li>
                    <li>Projeto Museu</li>
                    <li>Sobre</li>
                </div>
            </ul>
        </nav>
    );
}