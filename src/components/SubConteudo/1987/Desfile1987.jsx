import React from 'react';
import styles from './Desfile1986.module.css';

import foto1 from '../../../assets/1986 Foto Maria Angelica 741.jpg';
import foto2 from '../../../assets/1986 desfile.JPG';
import foto3 from '../../../assets/1986 saida.JPG';

import Grupo from "../../../assets/Group 28.svg";

import BtnVoltar from '../../VoltarBtn/BtnVoltar';
export default function SambaContent() {
  return (

    <>
    
        <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1987, Ano 02 - Desfile</h2>
    
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
      <h2 className={styles.sectionTitle}>O DESFILE</h2>
      <section className={styles.card}>

        <p className={styles.texto}>
           Em construção!
        </p>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={null} className={styles.imgBoxGrande} alt="" />
          <img src={null} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={null} className={styles.imgBox} alt="" />

            </div>
        </div>
      </div>

                <button className={styles.btn}>VER MAIS</button>
      </section>
      <h2 className={styles.sectionTitle}>A BATERIA</h2>
      <section className={styles.card}>

        <p className={styles.texto}>
           Em construção!
        </p>

    
      </section>

      <BtnVoltar></BtnVoltar>
    </div>

    </>
  );
}
