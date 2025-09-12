import React from 'react';
import styles from './Desfile2012.module.css';

import foto1 from '../../../assets/1986 Foto Maria Angelica 741.jpg';
import foto2 from '../../../assets/1986 desfile.JPG';
import foto3 from '../../../assets/1986 saida.JPG';

import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (

    <>
    
        <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Desfile</h2>
    
        </div>

         <img
                          src={Grupo}
                          className={styles.group28Gradiente}
                          alt="divisor ondulado"
                        />
            
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>O DESFILE</h2>
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
      <h2 className={styles.sectionTitle}>BATERIA</h2>
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
      <h2 className={styles.sectionTitle}>BAIANAS</h2>
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
      <h2 className={styles.sectionTitle}>MESTRE-SALA E PORTA-BANDEIRA</h2>
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
