import React from 'react';
import styles from './SuvacoMidia1992.module.css';
import namidia1 from '../../../assets/1992/naMidia/1992 Eco no Ar OKOK.JPG';
import namidia2 from '../../../assets/1992/naMidia/1992 Eco no Ar Trajeto e samba.JPG';
import namidia3 from '../../../assets/1992/naMidia/1992 eu recomerndo Evandro e Aldir.JPG';
import namidia4 from '../../../assets/1992/naMidia/1992 foto.JPG';
import namidia5 from '../../../assets/1992/naMidia/1992 JB (1).JPG';



import Grupo from "../../../assets/Group 28.svg";
export default function SambaContent() {
  return (
    <>
    <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1992, Ano 07 - Mídia</h2>
        <p className={styles.texto}>O desfile foi noticiado por portais jornalísticos de grande expressão da mídia carioca, no qual foram publicadas fotografias com os suvaquences desfrutando a folia das ruas do Jardim Botânico fantasiados com elementos que referenciavam o samba “Eco no Ar” ( composto especialmente para a ocasião e que satirizava a Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento), informações sobre o bloco como seus integrantes e horário de circulação e depoimentos de artistas que tiveram algum tipo de contato com o Suvaco como os músicos Evandro Mesquita e João Bosco. 
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
