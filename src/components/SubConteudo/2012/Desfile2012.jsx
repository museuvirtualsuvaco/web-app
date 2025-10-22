import React from 'react';
import styles from './Desfile2012.module.css';


import desfile3 from '../../../assets/2012/desfile/garzon307.jpg';
import desfile2 from '../../../assets/2012/desfile/garzon316.jpg';
import desfile1 from '../../../assets/2012/desfile/garzon381.jpg';


import baianas3 from '../../../assets/2012/baianas/426364_371090059585992_500618185_n.jpg';
import baianas2 from '../../../assets/2012/baianas/baianas por Patricia.jpg';
import baianas1 from '../../../assets/2012/baianas/419459_371092412919090_796356068_n.jpg';


import bateria1 from '../../../assets/2012/bateria/331896_2642993830447_302959483_o.jpg';
import bateria2 from '../../../assets/2012/bateria/337787_2616226281275_1351676215_o.jpg';
import bateria3 from '../../../assets/2012/bateria/325923_2616266082270_1743560731_o.jpg';


import mspb1 from '../../../assets/2012/mspb/330969_2616015796013_1745110318_o(2).jpg';
import mspb2 from '../../../assets/2012/mspb/429678_371094099585588_1177974823_n.jpg';
import mspb3 from '../../../assets/2012/mspb/Suvaco 2012 Rui Zilnet.jpg';


import Grupo from "../../../assets/Group 28.svg";

import BtnVoltar from '../../VoltarBtn/BtnVoltar';
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
                <img src={desfile1} className={styles.imgBoxGrande} alt="" />
                <img src={desfile2} className={styles.imgBox} alt="" />
                  <div className={styles.lastBox}>
      
                    <img src={desfile3} className={styles.imgBox} alt="" />
      
                      <button className={styles.btn}>VER MAIS</button>
                  </div>
              </div>
            </div>
      
            </section>
      <h2 className={styles.sectionTitle}>BATERIA</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={bateria3} className={styles.imgBoxGrande} alt="" />
          <img src={bateria1} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={bateria2} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
      <h2 className={styles.sectionTitle}>BAIANAS</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={baianas1} className={styles.imgBoxGrande} alt="" />
          <img src={baianas2} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={baianas3} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
      <h2 className={styles.sectionTitle}>MESTRE-SALA E PORTA-BANDEIRA</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={mspb2} className={styles.imgBoxGrande} alt="" />
          <img src={mspb1} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={mspb3} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
      <h2 className={styles.sectionTitle}>PRÊMIO SERPENTINA DE OURO</h2>
      <section className={styles.card}>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={null} className={styles.imgBoxGrande} alt="" />
          <img src={null} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={null} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>

    <BtnVoltar></BtnVoltar>  
    </div>

    </>
  );
}
