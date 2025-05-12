import React from "react";
import {renderTitleSubtitle } from "../../functions";
import './PagePirulito.css'
import { Link } from "react-router-dom";

function PagePirulito(){

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("Roberto de Assis (Pirulito)", "", "h2-nome-artista")}

                <div className="primeiro-paragrafo">
                <img id="perfil-artista" src="img/Pirulito-doc.jpg" alt="" />
                <p>O bloco Força Jovem do Horto, localizado no bairro de mesmo nome próximo ao Jardim Botânico, foi um parceiro importante durante os três primeiros anos do Suvaco. Os ensaios do Suvaco aconteciam na quadra do Força Jovem e a base da bateria era composta pelo pessoal do Força Jovem. Roberto de Assis, também conhecido como Pirulito, era o  presidente do bloco Força Jovem na época, e  participou da construção do primeiro samba do Suvaco  ("Divinas Axilas"), como revela no documentário 20 anos de Suvaco o sociólogo Arnaldo Chaim: "Em cinco minutos, ele transformou aquele monstro em samba". A relação entre os dois blocos terminaria após três anos com a mudança do Suvaco para o Clube Condomínio.
                </p>
                </div>

                <div className="redes-sociais">
                </div>

                <div className="footer-section">
                    <Link id="link-txt" to="/">VOLTAR</Link>
                    <div className="line"></div>
                </div>
            </div>

            
        </section>
        
    )
}

export default PagePirulito;