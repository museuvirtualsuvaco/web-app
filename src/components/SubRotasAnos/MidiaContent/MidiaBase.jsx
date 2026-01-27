import React from "react";
import styles from "./SuvacoMidia86.module.css";

import { midiaPorAno } from "../../../constants/anosSubRotas/midias.data";
import CabecalhoConteudo from "../Geral/CabecalhoConteudo";
import GridGaleria from "../Geral/GridGaleria";
import BtnVoltar from "../../VoltarBtn/BtnVoltar";

export default function MidiaBase({ ano }) {
  const dados = midiaPorAno[ano];
  if (!dados) return null;

  return (
    <>
      <CabecalhoConteudo
        titulo={dados.titulo}
        texto={dados.texto}
      />

      <div className={styles.container}>
        {dados.secoes.map((secao, index) => (
          <React.Fragment key={index}>
            <h2 className={styles.sectionTitle}>
              {secao.titulo}
            </h2>

            <section className={styles.card}>
              <GridGaleria imagens={secao.imagens} />
              <button className={styles.btn}>
                VER MAIS
              </button>
            </section>
          </React.Fragment>
        ))}

        <BtnVoltar />
      </div>
    </>
  );
}
