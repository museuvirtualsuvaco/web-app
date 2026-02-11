import React from "react";


import styles from './Samba.module.css'
import pessoas from "../../../../constants/pessoasArtistas.json";
import participacoes from "../../../../constants/participacoes.json";
import { sambasPorAno } from "../../../../constants/anosSubRotas/sambas.data";

import CabecalhoConteudo from "../Geral/CabecalhoConteudo";
import LetraFilipeta from "./LetraFilipeta";
import ListaArtistas from "../Geral/ListaArtistas";
import AutoresCarrossel from "../Geral/AutoresCarrossel";
import BtnVoltar from "../../../VoltarBtn/BtnVoltar";

import { getPhoto } from "../../../../hooks/getPhoto";
import { getMusic } from "../../../../hooks/getMusic";

export default function SambaBase({ ano }) {
  const dados = sambasPorAno[ano];

  const interpretesIds =
    participacoes[ano]?.samba?.interpretes || [];

  const autoresIds =
    participacoes[ano]?.samba?.autores || [];

  if (!dados) return null;

  return (
    <>
      <CabecalhoConteudo
        titulo={dados.titulo}
        texto={dados.textoIntro}
      />

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{dados.nomeSamba}</h2>

        <LetraFilipeta
          letra={dados.letra}
          imagem={getPhoto(ano,dados.filipeta)}
          legenda={dados.legenda}
        />

        <h2 className={styles.sectionTitle}>ESCUTE A MÚSICA</h2>
        <section className={styles.card}>
          <div className={styles.flexSong}>
            {dados.audio ? (
              <audio controls className={styles.audio}>
                <source src={getMusic(dados.audio)} type="audio/mpeg" />
              </audio>
            ) : (
              <p className={styles.texto}>Áudio indisponível</p>
            )}

            <ListaArtistas
              ids={interpretesIds}
              pessoas={pessoas}
              tipo="INTÉRPRETE"
            />
          </div>
        </section>

        <AutoresCarrossel
          ids={autoresIds}
          pessoas={pessoas}
        />

        <BtnVoltar />
      </div>
    </>
  );
}