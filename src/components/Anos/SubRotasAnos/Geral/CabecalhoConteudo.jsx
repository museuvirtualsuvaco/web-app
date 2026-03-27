import React from "react";
import Grupo from "../../../../assets/Group 28.svg";
import styles from '../SambaContent/Samba.module.css'

export default function CabecalhoConteudo({ titulo, texto }) {
  return (
    <div className={styles.cabecalho}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p
        className={styles.texto}
        dangerouslySetInnerHTML={{ __html: texto }}
      />
      <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor"
      />
    </div>
  );
}