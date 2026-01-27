import React from "react";

import styles from './SambaConteudo.module.css'

export default function LetraFilipeta({ letra, imagem, legenda }) {
  return (
    <section className={styles.card}>
      <div className={styles.lyricsImageWrapper}>
        <div className={styles.letra}>
          <p dangerouslySetInnerHTML={{ __html: letra }} />
        </div>

        <div className={styles.imageContainer}>
          <img
            src={imagem}
            className={styles.filipetaImage}
            alt="Filipeta"
          />
          <p className={styles.caption}>{legenda}</p>
        </div>
      </div>
    </section>
  );
}
