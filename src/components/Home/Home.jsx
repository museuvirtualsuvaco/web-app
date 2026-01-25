import { useEffect, useState } from "react"
import Footer from '../Footer/Footer'

import styles from './home.module.css'

import Video from "./Video/Video"
import FormCarrossel from "./FormCarrossel/FormCarrossel"
import { Link } from 'react-router-dom';


import logoufrj from "../../assets/ufrj-horizontal-cor-rgb-telas 1.svg"
import logoic from "../../assets/Sem títuloaaaaa 1.svg"
import logoeba from "../../assets/307093807_543650020901618_4682476023594602429_n 1.png"

import gradiente from "../../assets/Group - Onda(1).svg"

import projetoSocial from "../../assets/Home/social.jpeg"
import projetoMuseu from "../../assets/Home/museu.jpg"

import projetosMobile from "../../assets/Home/mobile.svg"

export default function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const isMobile = windowWidth < 604

    return (
        <div>
            <main>
                <div className={styles.homeTexts}>
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
                <div className={styles.homeLogos}>
                    <img className={styles.logoUfrj} src={logoufrj} alt="" />
                    <img className={styles.logoIc} src={logoic} alt="" />
                    <img className={styles.logoEba} src={logoeba} alt="Logo História da Arte" />
                    
                </div>
            </main>

            <div className={`${styles.buttons} ${isMobile ? styles.buttonsMobile : ""}`}>


                {/* AREA DESKTOP  */}
                {!isMobile && (
                    <>
                        <img className={styles.separadorGradiente1} src={gradiente} alt="" />

                        <div className={styles.projetos}>
                            <div className={styles.projetoSocial}>
                                <img className={styles.projetoSocialImg} src={projetoSocial} alt="" />
                                <a href="/divinasAxilas" className={`${styles.socialLink} ${styles.overlay}`}>O Projeto Social</a>
                            </div>

                            <div className={styles.projetoMuseu}>
                                <img className={styles.projetoMuseuImg} src={projetoMuseu} alt="" />
                                <a href="/projetoMuseu" className={`${styles.museuLink} ${styles.overlay}`}>O Projeto Museu</a>
                            </div>
                        </div>
                        <img className={styles.separadorGradiente2} src={gradiente} alt="" />
                    </>
                )}


                {/* AREA MOBILE */}
                {isMobile && (
                    <>
                        <div className={styles.projetoMobile}>

                            <img className={styles.botoesMobile} src={projetosMobile} alt="" />
                            <a href="/divinasAxilas" className={`${styles.socialLinkMobile} ${styles.overlay}`}>O Projeto Social</a>

                            <a href="/projetoMuseu" className={`${styles.museuLinkMobile} ${styles.overlay}`}>O Projeto Museu</a>

                        </div>


                    </>
                )}


            </div>

            <div className={styles.formArea}>

                <FormCarrossel></FormCarrossel>
                <Video></Video>
                
            </div>
        </div>
    )
}
