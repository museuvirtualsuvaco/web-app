import React from "react";
import { Link } from "react-router-dom";
import './Hamburguer.css';

function Hamburger(){
    const [menu, setMenu] = React.useState(false);
    const handleClick = () => setMenu(!menu);
    const closeMenu = () => setMenu(false);

    return(
        <div className="hamburger">
            {!menu && <button className="iconeMenu" onClick={handleClick}>☰</button>}
            {menu && <button className="iconeClose" onClick={handleClick}>✖</button>}

            {menu && (
                // Elemento overlay que fecha o menu ao ser clicado
                <div className="menu-overlay" onClick={closeMenu}>
                    <div className={`menu ${menu ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                        <ul>
                            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link to="/projeto" onClick={closeMenu}>Projeto</Link></li>
                            <li><Link to="/sobre" onClick={closeMenu}>Sobre o Suvaco</Link></li>
                            <li><Link to="/acervo" onClick={closeMenu}>Acervo</Link></li>
                            <li><Link to="/timeline" onClick={closeMenu}>Linha do Tempo</Link></li>
                            <li><Link to="/divinas" onClick={closeMenu}>Divinas Axilas</Link></li>
                            <li><Link to="/voce-com-o-suvaco" onClick={closeMenu}>Você com o Suvaco</Link></li>
                        </ul> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hamburger;
