import React from 'react';
import styles from './Desfile1992.module.css';
import foto1 from '../../../assets/1992/desfile/1992 Desfile 1.jpg';
import foto2 from '../../../assets/1992/desfile/1992 Desfile PB Bel Martins Silvinha Angela.jpg';
import foto3 from '../../../assets/1992/desfile/1992 E cu no ar estandarte.jpg';



import Grupo from "../../../assets/Group 28.svg";

import BtnVoltar from '../../VoltarBtn/BtnVoltar';
export default function SambaContent() {
  return (

    <>
    
        <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1992, Ano 07 - Desfile</h2>
        <p className={styles.texto}>Em construção!</p>
         <img
                          src={Grupo}
                          className={styles.group28Gradiente}
                          alt="divisor ondulado"
                        />
        </div>

        
            
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>O DESFILE</h2>
      <section className={styles.card}>
      
      
              <div className={styles.gridArea}>
      
              <div className={styles.gridVisual}>
                <img src={desfile1} className={styles.imgBoxGrande} alt="" />
                <img src={desfile2} className={styles.imgBox} alt="" />

                    <img src={desfile3} className={styles.imgBox} alt="" />
             
              </div>
            </div>

      <button className={styles.btn}>VER MAIS</button>
            </section>


      <h2 className={styles.sectionTitle}>BATERIA</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={bateria3} className={styles.imgBoxGrande} alt="" />
          <img src={bateria1} className={styles.imgBox} alt="" />

              <img src={bateria2} className={styles.imgBox} alt="" />

                
          
        </div>
      </div>
    <button className={styles.btn}>VER MAIS</button>
      </section>



      <h2 className={styles.sectionTitle}>BAIANAS</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={baianas1} className={styles.imgBoxGrande} alt="" />
          <img src={baianas2} className={styles.imgBox} alt="" />
          

              <img src={baianas3} className={styles.imgBox} alt="" />


        </div>
      </div>
                <button className={styles.btn}>VER MAIS</button>

      </section>
      <h2 className={styles.sectionTitle}>MESTRE-SALA E PORTA-BANDEIRA</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={mspb2} className={styles.imgBoxGrande} alt="" />
          <img src={mspb1} className={styles.imgBox} alt="" />


              <img src={mspb3} className={styles.imgBox} alt="" />

        </div>
      </div>
                <button className={styles.btn}>VER MAIS</button>

      </section>
      <h2 className={styles.sectionTitle}>PRÊMIO SERPENTINA DE OURO</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={serpentina3} className={styles.imgBoxGrande} alt="" />
          <img src={serpentina1} className={styles.imgBox} alt="" />

              <img src={serpentina5} className={styles.imgBox} alt="" />

        </div>
      </div>

                <button className={styles.btn}>VER MAIS</button>
      </section>

    <BtnVoltar></BtnVoltar>  
    </div>

    </>
  );
}
