import React from "react";
import styles from "./ano2012.module.css";
import Card from "../2012/cards/cards";
import { cardsData } from "../2012/cards/cardsData";


import img2012 from "../../../assets/2012/Cy a Bateria 2 2012_1.jpg";

import vector from "../../../assets/Vector(1).svg";
import group28 from "../../../assets/Group 28.svg";

export default function Ano2012() {
  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.cabecalho}>

        <div className={styles.title}>
          <h2 className={styles.blueTitles}>Desfile 2012</h2>
        </div>

        <img src={img2012} className={styles.floatImage} alt="Imagem Desfile 2012" />

        <section className={styles.sectionTexts}>
          <p>
            2012, ano repleto de expectativas e de desconfianças, deixou o povo carioca lidando com a preparação para a Copa do Mundo de 2014 e para as Olimpíadas de 2016, a revitalização do Porto Maravilha, e, claro, o fim do mundo de acordo com o calendário Maia. Talvez por todos estes motivos e pela anarquia inerente ao Suvaco, tenha sido resolvido fazer uma grande homenagem à distinta bateria suvaquense. No batuque dos surdos, as divisões se perdem e, juntos, todos cantam, dançam e pulam.
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
