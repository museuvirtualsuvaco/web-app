import React from "react";

import styles from "./Emconstrucao.module.css";

export default function Erro(){
    return(
    <>

    <main>
        <h1 className={styles.title}>Ops! Erro 404</h1>
        <p className={styles.texto}></p>
        <p className={styles.texto}>Parece que você tentou entrar em uma página que não existe</p>
        <p className={styles.texto}>Volte para a página principal por <span className={styles.link}><a href="/">aqui</a></span></p>
        
    </main>
    </>)
}