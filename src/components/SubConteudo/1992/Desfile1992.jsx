import React from 'react';
import styles from './Desfile1992.module.css';
import foto1 from '../../../assets/1992/desfile/1992 E cu no ar estandarte.jpg';
import foto2 from '../../../assets/1992/desfile/1992 Desfile PB Bel Martins Silvinha Angela.jpg';
import foto3 from '../../../assets/1992/desfile/1992 Desfile 1.jpg';



import Grupo from "../../../assets/Group 28.svg";

import BtnVoltar from '../../VoltarBtn/BtnVoltar';
export default function SambaContent() {
  return (

    <>
    
        <div className={styles.cabecalho}>
    
        <h2 className={styles.titulo}>Desfile 1992, Ano 07 - Desfile</h2>
        <p className={styles.texto}>
          O Rio estava se preparando para a Eco-92, um evento que sem dúvidas era o maior destaque do ano para os brasileiros. Entretanto, os cinco mil suvaqueiros saíram pelas ruas da Zona Sul com um enredo satírico do evento ambiental. Como diz uma postagem que encontramos no Facebook do bloco:
        </p>
        <p className={styles.texto}>
          <i>
          ‘O Suvaco do Cristo continuava esbanjando picardia. Era ano da Eco 92, e o Rio de Janeiro seria a sede da importante reunião global. 
          Todo mundo agora era verdinho desde criancinha. 
          A rapaziada não se fez de rogada, saiu cantando “... sou lixo, sou lixo sim, tenho que me reciclar em cada botequim ...” O irreverente samba havia começado numa feijoada no 741 da Maria Angélica tendo à frente Xico e Lobato e finalizado por Lenine e Bráulio Tavares.
          </i>
        </p>
        <p className={styles.texto}>
          <i>
          No desfile, jaburus e palmeiras imperiais do JB ouviram a galera cantar: “Mata virgem na fronteira do Perú. Eco no ar de Norte a Sul !!!” (com duplo sentido por favor).
          </i>
        </p>
        <p className={styles.texto}>
          <i>
          Nosso mestre-sala ostentava um balde de lixo verde na cabeça e Bel carregava um porta estandarte e uma roupa verde para combinar com o tema do desfile.
          </i> 
        </p>
        <p className={styles.texto}><i>
          A turma comemorou o sucesso do desfile em grande estilo num churrasco na casa do jornalista Helio Fernandes e da D. Rosinha.
          </i>
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
      
      
              <div className={styles.gridArea}>
      
              <div className={styles.gridVisual}>
                <img src={foto1} className={styles.imgBoxGrande} alt="" />
                <img src={foto2} className={styles.imgBox} alt="" />

                    <img src={foto3} className={styles.imgBox} alt="" />
             
              </div>
            </div>

      <button className={styles.btn}>VER MAIS</button>
            </section>


      <h2 className={styles.sectionTitle}>BATERIA</h2>
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
