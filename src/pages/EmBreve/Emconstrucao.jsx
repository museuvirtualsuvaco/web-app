import React from "react";

import styles from "./Emconstrucao.module.css";

export default function Emconstrucao(){
    return(
    <>

    <main>
        <h1 className={styles.title}>Ops! Essa página ainda não está disponível.</h1>
        <p className={styles.texto}></p>
        <p className={styles.texto}>Parece que você tentou entrar em uma página que ainda está sendo desenvolvida pela nossa equipe.</p>
        <p className={styles.texto}>Fique de olho em atualizações, pois em breve ela estará  no ar!</p>
        <p className={styles.texto}>Volte para a página principal por <span className={styles.link}><a href="/">aqui</a></span></p>
        
    </main>
    </>)
}