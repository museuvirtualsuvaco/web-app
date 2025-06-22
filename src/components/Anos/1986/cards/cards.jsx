import React from "react";
import styles from './cards.module.css'

export default function Card({ title, description, src, firstColor, secondColor }) {
  const gradient = `linear-gradient(180deg, ${firstColor}, ${secondColor})`;

  return (
    <div className={styles.cardInfo} style={{ background: gradient }}>
      <div className={styles.textsFlex}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.p}>{description}</p>

        <button className={styles.button}><span>Clique para ver mais!</span> <i class="ri-arrow-right-circle-line"></i></button>
      </div>
      
       <img src={src} alt={title} className={styles.imgCard} /> 

    </div>
  );
}
