import React from 'react';
import styles from './SuvacoMidia86.module.css';

import foto1 from '../../../assets/1985 JB - Nasce o Suvaco.jpg';
import foto2 from '../../../assets/1986 1 Desfila Sonia e Robertinho.jpg';
import foto3 from '../../../assets/1986 JB Carta dos Leitores Revolta.jpg';

import BtnVoltar from '../../VoltarBtn/BtnVoltar';


import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1986, Ano 01 - Mídia</h2>

        <p className={styles.texto}>
                      Na mídia, o Suvaco já virou pauta incontáveis vezes. E a cada aparição, seu nome reafirmou um traço essencial da identidade carioca: a capacidade de olhar para o cotidiano com leveza, humor e até poesia. É o retrato perfeito de como o Rio transforma geografia em cultura, espaço urbano em história e irreverência em marca registrada.
Em 1986, jornais locais jogaram confete e serpentina sobre o primeiro desfile do bloco no Jardim Botânico. Jornal do Brasil e O Globo chegaram a disputar o melhor furo jornalístico. Joaquim Ferreira dos Santos e a Revista de Domingo não perderam a chance de pautar a já esperada treta de Momo: de um lado, uma reação mais conservadora; do outro, o Suvaco. E, como manda a tradição, a democracia carnavalesca se faz assim também: falem mal, mas falem de mim!

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
