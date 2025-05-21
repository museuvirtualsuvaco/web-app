import React from "react";

import styles from './FormCarrossel.module.css'


export default function FormCarrossel(){
    return (
        <form className={styles.mainContainer} action="" method="get">

                <div className={styles.inputContainer}>
                    <label className={styles.buscarAnos} htmlFor="busca">Buscar Anos</label>
                    <input type="text" name="busca" id="busca" />
                </div>

        </form>
    )
}
