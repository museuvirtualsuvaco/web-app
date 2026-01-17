import React from "react";
import styles from "./DivinasAxilas.module.css";
import Card from "./cards/cards";
import { cardsData } from "./cards/cardsData";
import BtnVoltar from "../VoltarBtn/BtnVoltar"


import vector from "../../assets/Vector(1).svg";
import group28 from "../../assets/Group 28.svg";
import divinasImg from "../../assets/divinas.svg"
import divinas1 from "../../assets/divinas/divinas1.jpg"
import divinas2 from "../../assets/divinas/divinas5.jpg"
import divinas3 from "../../assets/divinas/divinas6.jpg"
import divinas4 from "../../assets/divinas/divinas7.jpg"

export default function DivinasAxilas() {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.cabecalho}>
                    <div className={styles.title}>
                        <h2 className={styles.blueTitles}>Divinas Axilas</h2>
                    </div>


                 <section >

                    <p className={styles.sectionTexts}>Fundada em 2008, a Divinas Axilas é uma ONG criada pelos integrantes do Suvaco do Cristo com o objetivo de capacitar, gerar renda e preservar a cultura popular.
Utilizando como atividades o fornecimento de  cursos gratuitos semestrais de corte, modelagem e costura e oficinas para mulheres e homens no qual eram confeccionados fantasias, adereços, estandartes de carnaval e customização de camisetas e de carnaval durante todo o ano.
                    </p>

                    <p className={styles.sectionTexts}>
                        As integrantes eram inicialmente  residentes da comunidade do Santa Marta, sendo aberto posteriormente para todas as comunidades e recebiam da ONG kits de material gratuitamente durante o curso.</p>
                        
                    <p className={styles.sectionTexts}>
                    
                        A Divinas já recebeu prêmios como: o Economia Criativa (parte do programa Fomento a Iniciativas Empreendedoras e Inovadoras do Ministério da Cultura), na categoria “Novos Modelos de Empreendimentos e Negócios Criativos” e o Prêmio Fantasia do Serpentina de Ouro 2012.
                    </p>

                    <img className={styles.imgDivinas} src={divinasImg} alt="" />

                </section>

                <img src={vector} className={styles.divisorGradiente} alt="divisor ondulado" />
                <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />

                </div>

                <div className={styles.areaVerde}>



                <div className={styles.cardContainer}>
                    {cardsData.map((data, index) => (
                        <Card key={index} {...data} />
                    ))}
                </div>

                                        <section className={styles.fotosSection}>
                                            
                        <h3 className={styles.sectionTitle}>Fotos</h3>
                        
                        <div className={styles.gridVisual}>
                                  <img src={divinas3} className={styles.imgBox} alt="" />
                                  <img src={divinas2} className={styles.imgBox} alt="" />
                                  <img src={divinas1} className={styles.imgBox} alt="" />
                                  <img src={divinas4} className={styles.imgBox} alt="" />
                            </div>
                    </section>

                    
                   {/*  <section>
                        <h3 className={styles.sectionTitle} >Links</h3>
                        <div className={styles.linksGradiente}/>
                        <div className= {styles.linksDiv}>
                             <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i><span> Instagram</span>
                </a>
                <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-line"></i><span> Youtube</span>
                </a>
                <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-box-line"></i><span> Facebook</span>
                    </a>
                        </div>
                        
                    </section> */}

                    <BtnVoltar></BtnVoltar>
                    <div className={styles.padding}></div>
                        
                    </div>

                    
            </div>
        </>
    );
}

