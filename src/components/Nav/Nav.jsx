import React from "react";
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

export default function Nav(){
    return (
        <nav className={styles.mainContainer}>
            <ul>
                <img className={styles.navIcon} src={null} alt="icone aqui" />
                <div className={styles.liItens}>
                    
                    <li>
                        <Link to={ROUTES.LANDING}>Início</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.DIVINAS_AXILAS}>Projeto Social</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.PROJETO_MUSEU}>Projeto Museu</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SOBRE}>Sobre</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}