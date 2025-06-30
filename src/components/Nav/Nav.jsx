// Nav.jsx (REVISADO)
import React from "react";
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import MenuHamburguer from './MenuHamburguer/MenuHamburguer'; // Caminho relativo ajustado

import * as ROUTES from '../../constants/routes';

export default function Nav() {
    return (
        <nav className={styles.mainContainer}>
            <img className={styles.navIcon} src={null} alt="icone aqui" />

            {/* Menu Desktop */}
            <ul className={styles.liItens}>
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
            </ul>

            {/* Menu Hambúrguer (Mobile) */}
            {/* Passe SOMENTE os <li> para o MenuHamburguer */}
            <MenuHamburguer>
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
            </MenuHamburguer>
        </nav>
    );
}