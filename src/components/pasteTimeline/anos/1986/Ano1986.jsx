import React, { useState } from "react";
import './Ano1986.css';
import { Link } from "react-router-dom";
import Player from "../componentes-anos/Player/Player";
import DATA from "../../../json/resultado_formatado.json"
import PlaceImageFromSheetByID from "../componentes-anos/imgByID/PlaceImageFromSheetByID";
import Carrossel from "../componentes-anos/Carrossel/Carrossel";

function Ano1986() {
    
    const artistas_SAMBA = [
        { funcao: "AUTOR", nome: "João Avelleira", imagem: "img\\WhatsApp Image 2025-02-12 at 18.26.09-modified.png", link: "/joao" },
        { funcao: "AUTOR", nome: "Arnaldo Chaim", imagem: "img\\chaim86-circle.png", link: "/breve" },
        { funcao: "AUTOR", nome: "José Lavigne", imagem: "img\\joseLavigne-doc-modified(1).png", link: "/lavigne" },
        { funcao: "AUTOR", nome: "Roberto (Pirulito)", imagem: "img\\Pirulito-doc-modified.png", link: "/pirulito" },
        { funcao: "INTÉRPRETE", nome: "Beto Brown", imagem: "img\\iconee.png", link: "/breve" },
    ];

    const artistas_ARTE = [

        { funcao: "ARTISTA", nome: "Sonia Matos", imagem: "img/Sonia Matos 1987-modified.png", link: "/breve" },
    ]


    const [estadoVisibilidadeDivisorias, setEstadoVisibilidadeDivisorias ] = useState([true,true,true,true,true]);

    const toggleDivisoria = (index) => {
        setEstadoVisibilidadeDivisorias(prevState => 
            prevState.map((visivel, i) => (i === index ? !visivel : visivel))
        );
    };
    

    return (
        <section>
            <div className="section-container">
                <div className="section-title-subtitle">
                    <h2 id="titulo-principal">Desfile 01 - Ano 1986</h2>
                </div>

                {/* BOX DE ACESSO RÁPIDO */}
                <div className="acesso-rapido">
                    <span id="acesso">Acesso Rápido</span>
                    <div className="box">
                    <ul className="box-links">
                        <li><a href="#contexto-historico">O Contexto Histórico</a></li>
                        <li><a href="#o-samba">O Samba</a></li>
                        <li><a href="#processo-criativo">Artes do Desfile</a></li>
                        <li><a href="#suvaco-midia">O Suvaco na Mídia</a></li>
                        <li><a href="#o-desfile">O Desfile</a></li>

                    </ul>

                    </div>

                </div>

                
                <div id="contexto-historico" className="div 0"> {/*DIVISÓRIA 0*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">Contexto Histórico</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(0)}>
                            {estadoVisibilidadeDivisorias[0] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>

                    
                                    
                    {estadoVisibilidadeDivisorias[0] && (<>
                        <p> 
                            O Rio de Janeiro passou por um esvaziamento do carnaval de rua nas décadas de 1960 e 1970. 
                            Com algumas poucas exceções, como a Banda de Ipanema e o Charme da Simpatia, apenas pequenos 
                            grupos isolados se reuniam, principalmente na zona norte da cidade. 
                        </p>
                        <br />
                        
                        <p>
                            O contexto político também não  estimulava a ocupação das ruas e o carnaval se encontrava 
                            bastante limitado às escolas de samba e blocos oficiais, desfilando no centro da cidade. 
                            Com a redemocratização e o movimento das Diretas Já, em 1984, esse contexto começa a mudar. 
                        </p>
                        <br />
                            
                        <p>
                            Em 1985, saem pela primeira vez o bloco Simpatia é Quase Amor, em Ipanema, e o bloco Barbas, em Botafogo. 
                            Em 1986, é a vez do Suvaco do Cristo. A proposta desses blocos é libertária. 
                            Como diria João Bosco: “Não põe corda no meu bloco". 
                            Muito dessa história pode ser encontrada na dissertação da jornalista 
                            Maria Rita Dias de Almeida Fernandes, Meu bloco na rua: Barbas, 
                            Simpatia e Suvaco na retomada do carnaval de rua da zona sul do Rio de Janeiro.
                        </p>
                    </>
                        
                    )}

                                    
                </div> {/*FIM DIVISÓRIA 0*/}

                
                <div id="o-samba" className="div 1"> {/*DIVISÓRIA 1*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Samba</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(1)}>
                            {estadoVisibilidadeDivisorias[1] ? "FECHAR" : "ABRIR"}
                        </button>
                    <div className="subtitle-line"></div>
                    </div>
                                                                        {/*FIM TÍTULO*/}
                
                    {estadoVisibilidadeDivisorias[1] && ( 
                        <>
                        <div className="subdiv1-1"> 

                        
                        <h3 className="subtitle-subdiv">Divinas Axilas</h3>
                        <div className="letra-side-by-side">
                            <p id="letra">
                                Venham ver, <br></br>
                                O odor do Redentor nos inspirou,<br></br>
                                Sob o manto protetor<br></br>
                                Das divinas axilas<br></br>
                                Brincamos nesta festa com amor.<br></br><br></br>

                                E contrariando<br></br>
                                As leis do Criador<br></br>
                                Cristo Redentor<br></br>
                                Libertando-nos do mal<br></br>
                                Desceu do céu e vem brincar o carnaval.<br></br><br></br>

                                (BIS)<br></br>
                                Gávea Pequena, Rocinha, Humaitá,<br></br> 
                                Índios Tamoios, ilustres Tupinambás,<br></br>

                                Mas venham ver.<br></br>
                            
                            </p>

                            <div className="foto-86">
                            <PlaceImageFromSheetByID id={284} sheet={DATA} ObjID={"foto-letra-86"}></PlaceImageFromSheetByID>
                            <p style={{fontSize:"0.95rem"}}className="legenda-86">Filipeta com a letra do Samba distribuída no desfile de 1986. Patrocínio das Casas da Banha(que também ofereceram a kombi de som).</p> 
                                </div>
                        </div>
                    </div>
                    
                    <div className="subdiv1-2"> {/* SUBDIVISAO 2 - ESCUTE SAMBA */}
                        <h3 className="subtitle-subdiv" style={{marginBottom:"25px"}}>Escute o Samba</h3>
                        <Player audioSrc={"songs/1986 Divinas Axilas novo.mp3"}></Player>

                    </div>

                        <h3 className="subtitle-subdiv" style={{marginTop:"50px"}}>Por trás da letra</h3>
                        <p>
                        O primeiro samba, intitulado “Divinas Axilas”, foi composto por João Avelleira, Arnaldo Chaim e José Lavigne, com sugestões do presidente do bloco Força Jovem do Horto,  Roberto de Assis (conhecido pelo apelido de Pirulito). A canção ironizava a maior parte dos sambas enredos pela obrigatoriedade de referências a temas nacionais, citando as localidades da Rocinha e Humaitá e povos indígenas Tamoios  e Tupinambás, obrigatoriedade já satirizada no "Samba do Crioulo Doido" do grande Stanislau Ponte Preta.  Embora explicações mais glamourizadas, anos mais tarde tenham surgido, era apenas mais uma brincadeira irreverente, como todo o bloco. (Ver documentário dos 20 anos do bloco, da diretora Paola Vieira, em breve aqui no nosso portal).
                        </p>


                        <h3 className="subtitle-subdiv" style={{marginTop:"30px"}}>Autores e Intérpretes</h3>
                        <Carrossel artistas={artistas_SAMBA} />
                        </>
                        )}

                                    
                </div> {/*FIM DIVISÓRIA 1*/}
                
                <div id="processo-criativo" className="div 2"> {/*DIVISÓRIA 2*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">Artes do Desfile</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(2)}>
                            {estadoVisibilidadeDivisorias[2] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    
                    {estadoVisibilidadeDivisorias[2] && (<> {/* SUBDIVISAO 2 - ESCUTE SAMBA */}
                        <h3 className="subtitle-subdiv">Camiseta</h3>
                        <PlaceImageFromSheetByID id={2} sheet={DATA} objClass={"center"} ObjID={"camisa86"}></PlaceImageFromSheetByID>
                        <p style={{textAlign:"center"}}>Design da camiseta de 1986</p>

                    <div className="subdiv3-2"> 
                        <h3 className="subtitle-subdiv">Artistas</h3>
                        <Carrossel artistas={artistas_ARTE} />
                        </div></>)}

                                    
                </div> {/*FIM DIVISÓRIA 2*/}

                <div id="suvaco-midia" className="div 3" style={{marginTop: "25px"}}> {/*DIVISÓRIA 3*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Suvaco na Mídia</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(3)}>
                            {estadoVisibilidadeDivisorias[3] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    {estadoVisibilidadeDivisorias[3] && (
                        <>
                        <div className="flex-midia">
                        <div className="sistema-colunas">
                            <PlaceImageFromSheetByID id={18} sheet={DATA} objClass={"img-coluna"} ObjID={"nasce-suvaco"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={15} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={17} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={14} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={16} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={19} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={13} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        </div>
                    </div>
                        </>)}
                    


                                    
                </div> {/*FIM DIVISÓRIA 3*/}
                
                
                <div id="o-desfile" className="div 4" style={{marginTop: "25px"}}> {/*DIVISÓRIA 4*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Desfile</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(4)}>
                            {estadoVisibilidadeDivisorias[4] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    {estadoVisibilidadeDivisorias[4] && (<>
                    <p> Nessa época não andávamos por aí com nossas câmeras fotográficas… Então são muito poucos registros.</p>
                        <p style={{marginBottom:'15px'}}>Se você tiver algo do desfile nesse ano, por favor não deixe de entrar em contato conosco!</p>
                    <div className="flex-midia">
                    <div className="sistema-colunas">
                        <PlaceImageFromSheetByID id={6} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={10} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={9} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={12} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={7} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={8} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                    </div>
                    </div>
                    

                    </>)}
                                    
                </div> {/*FIM DIVISÓRIA 5*/}


            
                        <div className="footer-section">
                        <Link id="link-txt" to="/" onClick={() => window.scrollTo(0, 0)}>VOLTAR</Link>

                                    <div className="line"></div>       
                        </div>


            </div>
                
            
        </section>
    );
}

export default Ano1986;
