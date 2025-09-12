import React from "react";
import styles from "./DivinasAxilas.module.css";
import Card from "./cards/cards";
import { cardsData } from "./cards/cardsData";
import BtnVoltar from "../VoltarBtn/BtnVoltar"


import vector from "../../assets/Vector(1).svg";
import group28 from "../../assets/Group 28.svg";
import divinasImg from "../../assets/divinas.svg"

export default function DivinasAxilas() {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.cabecalho}>
                    <div className={styles.title}>
                        <h2 className={styles.blueTitles}>Divinas Axilas</h2>
                    </div>


                 <section >

                    <p className={styles.sectionTexts}>Fundada em 2008, a Divinas Axilas era uma ONG criada pelos integrantes do Suvaco do Cristo com o
                        intuito de fornecer cursos gratuitos de corte, modelagem e costura para mulheres em um ateliê no qual eram confeccionados
                        trajes carnavalescos durante o período de desfiles cariocas. Essas vestimentas eram compradas e, posteriormente,revendidas
                        pelos membros do bloco para outras pessoas, com os lucros arrecadados sendo utilizados para manter o funcionamento da organização.
                    </p>

                    <p className={styles.sectionTexts}>
                        As integrantes- em sua maioria residentes de Santa Marta - recebiam da ONG kits grátis para confecção destes trajes
                        e eram divididas nos cursos de Corte e costura, oficina de adereços e criação de figurinos de carnaval, aprendendo
                        desde a operar os equipamentos necessários até modelar os futuros trajes que saiam do papel após as aulas práticas, além
                        da separação dos materiais utilizados que eram reaproveitados de blocos carnavalescos.</p>
                    <p className={styles.sectionTexts}>
                        A Divinas já recebeu prêmios como: o Economia Criativa (parte do programa Fomento a Iniciativas 
                        Empreendedoras e Inovadoras do Ministério da Cultura), na categoria 
                        “Novos Modelos de Empreendimentos e Negócios Criativos” e o Prêmio Fantasia do Serpentina de Ouro 2012.
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


                    <section>
                        <h3 className={styles.sectionTitle}>Fotos</h3>
                        
                        <div className={styles.gridGradiente}/>
                        <div className={styles.gridVisual}>
                                  <img src={divinasImg} className={styles.imgBoxGrande} alt="" />
                                  <img src={divinasImg} className={styles.imgBox} alt="" />
                                  <img src={divinasImg} className={styles.imgBox} alt="" />
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

