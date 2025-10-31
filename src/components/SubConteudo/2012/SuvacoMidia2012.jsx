import React from 'react';
import styles from './SuvacoMidia2012.module.css';

import namidia1 from '../../../assets/2012/na_midia/2012 Globo Anselmo gente Boa(1).jpg'
import namidia2 from '../../../assets/2012/na_midia/2012 Serpentina de Ouro 2012(1).jpg'
import namidia3 from '../../../assets/2012/na_midia/2012 Suvaco Cynthia PB Caras.jpg'
import namidia4 from '../../../assets/2012/na_midia/2012 Valor economico(1).jpg'

import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Mídia</h2>
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
