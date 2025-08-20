import React from "react";
import styles from "./ano2012.module.css";
import Card from "../2012/cards/cards";
import { cardsData } from "../2012/cards/cardsData";


import img2012 from "../../../assets/2012/imgPagina2012.jpg";

import vector from "../../../assets/Vector(1).svg";
import group28 from "../../../assets/Group 28.svg";

export default function Ano2012() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.blueTitles}>Desfile 27</h2>
          <div className={styles.line}></div>
          <h2 className={styles.greenTitles}>Ano 2012</h2>
        </div>

        <img src={img2012} className={styles.floatImage} alt="Imagem Desfile 2012" />

        <section className={styles.sectionTexts}>
          <p>
            Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012 Texto 2012  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor illo laudantium dolore impedit explicabo, modi blanditiis cumque repellat praesentium vel iusto quo reiciendis necessitatibus accusamus accusantium molestias, doloremque error in?
            Explicabo voluptatum distinctio asperiores nesciunt doloremque corporis ex culpa in quae deleniti neque, aliquid, eligendi eaque? Sunt nesciunt iusto, blanditiis, cupiditate dolorem, quidem officiis ea vel similique ipsa earum totam.
            Tenetur, aperiam cupiditate quo repudiandae reprehenderit nulla, facere cum perferendis illum perspiciatis quisquam, accusamus in non quia odit quas vero eveniet temporibus sint soluta? Reprehenderit ex ab provident magni quasi!
          </p>

        </section>

        <img src={vector} className={styles.divisorGradiente} alt="divisor ondulado" />
        <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />

        <div className={styles.cardContainer}>
          {cardsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
