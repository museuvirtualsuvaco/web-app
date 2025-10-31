import React from "react";
import styles from "./ano1987.module.css";
import Card from "../1987/cards/cards";
import { cardsData } from "../1987/cards/cardsData";
import image from "../../../assets/1987/samba/1987 desfile estandarte(1).JPG"



import vector from "../../../assets/Vector(1).svg";
import group28 from "../../../assets/Group 28.svg";

export default function Ano1987() {
  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.cabecalho}>

        <div className={styles.title}>
          <h2 className={styles.blueTitles}>Desfile 1987</h2>
        </div>

        <img src={image} className={styles.floatImage} alt="Imagem Desfile 1987" />

        <section className={styles.sectionTexts}>
          <p>
            Em construção!
            <br />
            <br />
            <br />
            <br />
          </p>

        </section>

        
        </div>

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
