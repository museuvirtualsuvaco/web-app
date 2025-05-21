import FormCarrossel from "./FormCarrossel/FormCarrossel"
import styles from "./Home.module.css"
import React, { useEffect, useState } from "react"

export default function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const isMobile = windowWidth < 604

    return (
        <>
            <main>
                <div className={styles.homeText}>
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
                <div className={styles.homeLogo}>
                    <img className={styles.logoUfrj} src="src/assets/ufrj-horizontal-cor-rgb-telas 1.svg" alt="" />
                    <img className={styles.logoIc} src="src/assets/Sem títuloaaaaa 1.svg" alt="" />
                    <img className={styles.eba} src="src\assets\307093807_543650020901618_4682476023594602429_n 1.png" alt="Logo História da Arte" />
                </div>
            </main>

            <div className={`buttons ${isMobile ? "buttons-mobile" : ""}`}>


                {/* AREA DESKTOP  */}
                {!isMobile && (
                    <>
                        <img className={styles.separadorGradiente1} src="src/assets/Group - Onda(1).svg" alt="" />

                        <div className={styles.projetos}>
                            <div className={styles.projetoSocial}>
                                <img className={styles.projetoSocialImg} src="src/assets/image 2(1).svg" alt="" />
                                <a href="http://google.com" className={styles.socialLinkOverlay}>O Projeto Social</a>
                            </div>

                            <div className={styles.projetoMuseu}>
                                <img className={styles.projetoMuseuImg} src="src/assets/Emariz 28(2).jpg" alt="" />
                                <a href="http://google.com" className={styles.museuLinkOverlay}>O Projeto Museu</a>
                            </div>
                        </div>
                        <img className={styles.separadorGradiente2} src="src/assets/Group - Onda(1).svg" alt="" />
                    </>
                )}


                {/* AREA MOBILE */}
                {isMobile && (
                    <>
                        <div className={styles.projetosMobile}>

                            <img id="botoes-mobile" src="src/assets/Frame 14(2).svg" alt="" />
                            <a href="http://google.com" className={styles.socialLinkMobileOverlay}>O Projeto Social</a>

                            <a href="http://google.com" className={styles.museuLinkMobileOverlay}>O Projeto Museu</a>



                        </div>


                    </>
                )}


            </div>

            <div className={styles.formArea}>

                <FormCarrossel></FormCarrossel>

            </div>
        </>
    )
}
