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

            <ul className={`menuItems ${isOpen ? 'open' : ''}`}>
               
                {React.Children.map(children, child => {
                    
                    if (React.isValidElement(child)) {
                       
                        return React.cloneElement(child, {
                            onClick: closeMenu 
                        });
                    }
                    return child; 
                })}
            </ul>
        </div>
    );
};

export default MenuHamburguer;