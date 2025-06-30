// MenuHamburguer.jsx (REVISADO)
import React, { useState } from 'react';
import './MenuHamburguer.css';

const MenuHamburguer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburguerContainer">
            <button
                className={`hamburguerIcon ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Abrir menu"
                aria-expanded={isOpen}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* O <ul> principal do menu fica DENTRO do MenuHamburguer */}
            <ul className={`menuItems ${isOpen ? 'open' : ''}`}>
                {/* Mapeie diretamente os children e adicione a prop onClick a cada um */}
                {React.Children.map(children, child => {
                    // Verifica se é um elemento React válido
                    if (React.isValidElement(child)) {
                        // Clona o elemento filho e adiciona a prop onClick
                        // Isso funcionará para <li>, <a> ou qualquer outro elemento que você passar
                        return React.cloneElement(child, {
                            onClick: closeMenu // Fecha o menu ao clicar no item
                        });
                    }
                    return child; // Retorna outros tipos de filhos como strings, null, etc.
                })}
            </ul>
        </div>
    );
};

export default MenuHamburguer;