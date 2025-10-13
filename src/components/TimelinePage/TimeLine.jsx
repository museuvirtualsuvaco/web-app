import React from "react";
import styles from './Timeline.module.css'

import anos from '../../constants/anos.js'

export default function Timeline(){
    return <>
    
        <div className={styles.row}>
            {anos.map((item) => (
                <a key={item.nome} href={`/${item.nome}`} className={styles.item}>

                    <img src={item.src} alt={item.nome} />

                </a>
            ))}
        </div>
    </>
}