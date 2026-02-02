import React from 'react';
import styles from './SuvacoMidia1992.module.css';


import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1992, Ano 06 - Mídia</h2>
        <p className={styles.texto}>Em construção!</p>
        <img
                  src={Grupo}
                  className={styles.group28Gradiente}
                  alt="divisor ondulado"
                />
        </div>
    
        
    
    
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>NA MÍDIA</h2>
      <section className={styles.card}>

  

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={namidia4} className={styles.imgBoxGrande} alt="" />
          <img src={namidia3} className={styles.imgBox} alt="" />
            

              <img src={namidia1} className={styles.imgBox} alt="" />

  
        </div>
      </div>

                <button className={styles.btn}>VER MAIS</button>
      </section>
    </div>

    </>
  );
}
