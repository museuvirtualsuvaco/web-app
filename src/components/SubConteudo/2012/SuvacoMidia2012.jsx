import React from 'react';
import styles from './SuvacoMidia2012.module.css';

import foto1 from '../../../assets/1985 JB - Nasce o Suvaco.jpg';
import foto2 from '../../../assets/1986 1 Desfila Sonia e Robertinho.jpg';
import foto3 from '../../../assets/1986 JB Carta dos Leitores Revolta.jpg';

import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Mídia</h2>
    
        </div>
    
        <img
                  src={Grupo}
                  className={styles.group28Gradiente}
                  alt="divisor ondulado"
                />
    
    
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>NA MÍDIA</h2>
      <section className={styles.card}>

  

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={foto1} className={styles.imgBoxGrande} alt="" />
          <img src={foto2} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={foto3} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
      <h2 className={styles.sectionTitle}>PRÊMIO SERPENTINA DE OURO</h2>
      <section className={styles.card}>

  

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src='#' className={styles.imgBoxGrande} alt="" />
          <img src='#' className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src='#' className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
    </div>

    </>
  );
}
