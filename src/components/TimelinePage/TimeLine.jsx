import React from "react";
import styles from './Timeline.module.css';

import anos from '../../constants/anos.js';

export default function Timeline() {
  return (
    <div className={styles.row}>
      {anos.map((item) => (
        <a
          key={item.nome}
          href={`/${item.nome}`}
          className={`${styles.item} ${item.disabled ? styles.disabled : ""}`}
          onClick={(e) => {
            if (item.disabled) {
              e.preventDefault(); // ⛔ bloqueia navegação
              return;
            }
          }}
        >
          <img src={item.src} alt={item.nome} />
        </a>
      ))}
    </div>
  );
}
