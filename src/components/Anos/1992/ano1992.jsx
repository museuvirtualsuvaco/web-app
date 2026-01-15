import React from "react";
import styles from "./ano1992.module.css";
import Card from "../1992/cards/cards";
import { cardsData } from "../1992/cards/cardsData";


import img1992 from "../../../assets/1992/1992 Suvaco Festa no Vasco Pre Carnaval.jpg";


import vector from "../../../assets/Vector(1).svg";
import group28 from "../../../assets/Group 28.svg";

export default function Ano1992() {
  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.cabecalho}>

        <div className={styles.title}>
          {/*Título do cabeçalho*/}
          <h2 className={styles.blueTitles}>Desfile 1992</h2>
        </div>

          {/*Foto do cabeçalho*/}
        <img src={img1992} className={styles.floatImage} alt="Imagem Desfile 1992" />


        {/*Texto do cabeçalho
        
        Escrito no documento "POR ANO" como "Introdução / Contexto"
        
        */}
        <section className={styles.sectionTexts}>
          <p>
            Texto Inicial
          </p>

        </section>

        
        </div>


      {/*Geração de cards da página*/}
        <div className={styles.sectionCards}>
          <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />
          {cardsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
