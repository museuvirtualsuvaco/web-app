import React from "react";
import styles from "./CamisetaConteudo.module.css";
import pessoas from "../../../constants/pessoasArtistas.json";
import participacoes from "../../../constants/participacoes.json";
import { camisetasPorAno } from "../../../constants/anosSubRotas/camisetas.data";

import CabecalhoConteudo from "../Geral/CabecalhoConteudo";
import ListaArtistas from "../Geral/ListaArtistas";
import BtnVoltar from "../../VoltarBtn/BtnVoltar";

export default function CamisetaBase({ ano }) {
  const dados = camisetasPorAno[ano];
  const artistasIds = participacoes[ano]?.camiseta || [];

  if (!dados) return null;

  return (
    <>
      <CabecalhoConteudo
        titulo={dados.titulo}
        texto={dados.texto}
      />

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>A CAMISETA</h2>
        <section className={styles.card}>
          <img
            src={dados.imagem}
            className={styles.imgCamiseta}
            alt="Camiseta"
          />
        </section>

        <h2 className={styles.sectionTitle}>ARTISTA</h2>
        <section className={styles.card}>
          <ListaArtistas
            ids={artistasIds}
            pessoas={pessoas}
          />
        </section>

        <BtnVoltar />
      </div>
    </>
  );
}
