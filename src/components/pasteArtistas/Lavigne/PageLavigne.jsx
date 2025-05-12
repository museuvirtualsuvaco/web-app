import React from "react";
import { renderTitleSubtitle } from "../../functions";
import './PageLavigne.css'
import { Link } from "react-router-dom";
import Voltar from "../../Voltar/Voltar";

function PageLavigne() {

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("José Lavigne", null)}

                <div className="primeiro-paragrafo">
                    <img id="perfil-artista" src="img/joseLavigne-doc.jpg" alt="" />
                    <p>Nascido no Rio de Janeiro, José Lavigne de Lemos Filho enxergou no teatro do Liceu Franco Brasileiro um escape para a rigidez de sua educação. De lá, entrou para o Tablado, escola de atuação fundada em 1951 pela atriz, escritora e diretora Maria Clara Machado.                                    Após abandonar a universidade em que cursava direito para dedicar-se exclusivamente ao mundo das artes, Lavigne ingressou no grupo “Asdrúbal Trouxe o Trombone”. Posteriormente fundou, junto com outros artistas,  o “Manhas e Manias”, focado em apresentações circenses, onde passou a desenvolver suas primeiras experiências como diretor. Ao ingressar na Globo, em 1986, Lavigne passou a dirigir programas  humorísticos de grande sucesso da televisão brasileira, assim como programas jornalísticos. Em 1985, na época da criação do Suvaco do Cristo, era um dos moradores do prédio 741 da Rua Maria Angélica, onde nossa odisseia começou!
                    </p>
                </div>

                <div className="redes-sociais">
                </div>

               <Voltar></Voltar>
            </div>


        </section>

    )
}

export default PageLavigne;