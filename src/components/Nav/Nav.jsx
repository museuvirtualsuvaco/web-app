import React from "react";
import './Nav.css'

export default function Nav(){
    return <>
        <nav>
            <ul>
                <img id="nav-icon" src="" alt="icone aqui" />
                <div className="li-itens">
                    <li>Início</li>
                    <li>Projeto Social</li>
                    <li>Projeto Museu</li>
                    <li>Sobre</li>
                </div>
            </ul>
        </nav>
    </>
}