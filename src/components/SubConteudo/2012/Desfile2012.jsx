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
    
        <h2 className={styles.titulo}>Desfile 1986, Ano 01 - Desfile</h2>
    
        </div>

         <img
                          src={Grupo}
                          className={styles.group28Gradiente}
                          alt="divisor ondulado"
                        />
            
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>O DESFILE</h2>
      <section className={styles.card}>

        <p className={styles.texto}>
           Nessa época não andávamos por aí com nossas câmeras fotográficas, então são muito poucos registros.
           Se você tiver algo do desfile nesse ano, por favor não deixe de entrar em contato conosco!
        </p>

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
    </div>

    </>
  );
}
