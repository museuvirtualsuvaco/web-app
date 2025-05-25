import React from "react";
import styles from './cards.module.css'

export default function Card({ title, description, src, firstColor, secondColor }) {
  const gradient = `linear-gradient(180deg, ${firstColor}, ${secondColor})`;

  return (
    <div className={styles.cardInfo} style={{ background: gradient }}>
      <div className={styles.textsFlex}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>

        <button className={styles.button}>Clique para saber mais!</button>
      </div>
      
       <img src={src} alt={title} className={styles.imgCard} /> 

    </div>
  );
}
