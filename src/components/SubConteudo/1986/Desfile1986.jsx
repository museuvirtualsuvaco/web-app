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
    
        <h2 className={styles.titulo}>Desfile 1986, Ano 01 - Desfile</h2>
    
        <p className={styles.texto}>
          Domingo, 02 de fevereiro de 1986, dia de Yemanjá, a galera da Maria Angélica 741, com seus estandartes de fios metalizados, 70 camisetas vendidas, 2 cornetas de auto-falante no teto de uma Kombi emprestada pelo Jornal dos Sports, aqueceu as turbinas na sua sede debaixo das Axilas do filho do homem e partiu para o bar Jóia. A primeira porta-bandeira foi a Sonia Mattos e o mestre-sala,  o Robertinho do Horto. Saindo da esquina da rua Faro subimos pela Lopes Quintas, Pacheco Leão até a quadra do Força Jovem ao lado da subida D. Castorina no coração do Horto. Obviamente, nem todo mundo aprovou a folia, como mostra a seção carta dos leitores do Jornal do Brasil. Ao contrário do que queria D. Lenita, o movimento absurdo e louco prosseguiu e se reproduziu em muitos cordões e blocos que hoje fazem nosso carnaval de rua um dos mais animados do Brasil.

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

      <BtnVoltar></BtnVoltar>
    </div>

    </>
  );
}
