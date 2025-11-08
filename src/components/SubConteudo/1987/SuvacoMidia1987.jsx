import React from 'react';
import styles from './SuvacoMidia86.module.css';

import foto1 from '../../../assets/1987/naMidia/1987 Soninha e Robertinho.jpg';
import foto2 from '../../../assets/1987/naMidia/1987 Suvaco Isabel.jpg';
import foto3 from '../../../assets/1987/naMidia/1987 Suvaco Sonia e Robertinho.jpg';

import BtnVoltar from '../../VoltarBtn/BtnVoltar';


import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1987, Ano 02 - Mídia</h2>

        <p className={styles.texto}>
                      Em construção!
                    </p>
    
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
          <img src={foto1} className={styles.imgBoxGrande} alt="" />
          <img src={foto2} className={styles.imgBox} alt="" />

              <img src={foto3} className={styles.imgBox} alt="" />

                
        </div>
      </div>

      <button className={styles.btn}>VER MAIS</button>

      </section>

      <BtnVoltar></BtnVoltar>
    </div>

    </>
  );
}
