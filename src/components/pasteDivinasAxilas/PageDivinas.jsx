import React from "react";
import { renderTitleSubtitle } from "../functions";
import { Link } from "react-router-dom";
import './Divinas.css'
import { rightRender } from "../functions";

function PageDivinas(props){
    return(
    <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title, props.subtitle)}
            <main>
                <p>
                Mais informações sobre a ONG Divinas Axilas podem ser encontradas em suas redes sociais:

                    </p>
                <img className= "img-divinas-ong" src="img/327061573_573006838013992_1583039500011356462_n 1.png" alt="" />

                {rightRender("Redes Sociais da ONG", "FIQUE CONECTADO COM O PROJETO", "True")}

                <div className="links-ong">

                    <Link src="#"><i className="ri-instagram-line"></i> Instagram</Link>
                    <Link src="#"><i className="ri-youtube-line"></i> Youtube</Link>
                    <Link src="#"><i className="ri-facebook-box-line"></i> Facebook</Link>
                    <Link src="#"><i className="ri-mail-line"></i> Email</Link>
                </div>

            </main>
            <div className="footer-section">
                        <Link id="link-txt" to="/">VOLTAR</Link>
                        <div className="line"></div>
            </div>
        </div>

        



    </section>)
}

export default PageDivinas;