import "./home.css"
import React from "react"

export default function Home() {
    return <>
        <main>
            <div className="home-texts">
                <p>Há muita história para contar…</p>
                <p>
                    Então nasceu a ideia de construir um  espaço para que essa história seja contada:
                    a história do Suvaco do Cristo e da revitalização do carnaval de rua do Rio de Janeiro.
                    Foi iniciada uma parceria entre a presidência do bloco e a UFRJ, através de  seu Instituto de Computação,
                    e dessas conversas nasceu o projeto de extensão "Museu virtual do carnaval de rua do Rio de Janeiro: Bloco Suvaco do Cristo”
                    que conta com a participação de professores, técnicos e estudantes da UFRJ, em especial, das áreas da Computação e da História da Arte.</p>

                <p>O projeto atua na preservação da memória do bloco e da revitalização do carnaval de rua carioca,
                    através de um repositório e um portal (museu virtual) com a história do bloco. Uma organização por ano de
                    desfile destaca o aspecto cronista do bloco, com sambas (e  fantasias) relacionados ao  momento.
                    O site está sendo construído em  torno dessa contextualização. Como resultado, extenso material estará
                    disponível na rede para consulta por pesquisadores e público em geral.</p>
            </div>
            <div className="home-logos">
                <img id="logo-ufrj" src="src/assets/ufrj-horizontal-cor-rgb-telas 1.svg" alt="" />
                <img id="logo-ic" src="src/assets/Sem títuloaaaaa 1.svg" alt="" />
                <img id="eba" src="src\assets\307093807_543650020901618_4682476023594602429_n 1.png" alt="Logo História da Arte" />
            </div>
        </main>

        <div className="buttons">

            <img id="separador-gradiente-1" src="src/assets/Group - Onda(1).svg" alt="" />
            
            <div className="projetos">
                <div className="projeto-social">
                    <img id="projeto-social-img" src="src/assets/image 2(1).svg" alt="" />
                    <a href="http://google.com" className="social-link overlay">O Projeto Social</a>
                </div>
                
                
                <div className="projeto-museu">
                    <img id="projeto-museu-img" src="src/assets/Emariz 28(2).jpg" alt="" />
                    <a href="http://google.com" className="museu-link overlay">O Projeto Museu</a>
                </div>
            </div>
            
            <img id="separador-gradiente-2" src="src/assets/Group - Onda.svg" alt="" />
        </div>
    </>
}
