import React from "react";
import { Link } from "react-router-dom";
import { renderTitleSubtitle } from "../functions";

import Video from "./Video";
function Projeto(){
    return (
        <section>
        

            <div className="section-container">
                {renderTitleSubtitle("Projeto Museu Virtual do Carnaval de Rua do Rio: Suvaco do Cristo",null,"projeto-museu")}    
            
                <p> Há muita história para contar… Então nasceu a ideia de construir um espaço para que essa história seja contada: a história do Suvaco do Cristo e da revitalização do carnaval de rua do Rio de Janeiro.  Foi iniciada uma parceria entre a presidência do bloco e a UFRJ, através de seu Instituto de Computação, e dessas conversas nasceu o projeto de extensão "Museu virtual do carnaval de rua do Rio de Janeiro: Bloco Suvaco do Cristo”  que conta com a participação de professores, técnicos e estudantes da UFRJ, em especial, das áreas da Computação e da História da Arte.  O projeto atua na preservação da memória do bloco e da revitalização do carnaval de rua carioca, através de um repositório e um portal (museu virtual) com a história do bloco. Uma organização por ano de desfile destaca o aspecto cronista do bloco, com sambas (e fantasias) relacionados ao  momento.  O site está sendo construído em torno dessa contextualização. Como resultado, extenso material estará disponível na rede para consulta por pesquisadores e público em geral. </p>
                <Video />
            
                <div className="footer-section">
                    <a href="/projeto" id="link-txt">SOBRE O PROJETO E OS PARTICIPANTES</a>
                    <div className="line"></div>
                </div>
            </div>
        
        
            
        </section>

    )
}

export default Projeto;