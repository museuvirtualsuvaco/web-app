import React from "react";
import styles from "./Desfile1986.module.css";

import { desfilePorAno } from "../../../constants/anosSubRotas/desfiles.data";
import CabecalhoConteudo from "../Geral/CabecalhoConteudo";
import GridGaleria from "../Geral/GridGaleria";
import BtnVoltar from "../../VoltarBtn/BtnVoltar";

export default function DesfileBase({ ano }) {
    const dados = desfilePorAno[ano];
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
                            {secao.texto && (
                                <p className={styles.texto}>
                                    {secao.texto}
                                </p>
                            )}

                            <GridGaleria imagens={secao.imagens} />

                            {secao.imagens && (
                                <button className={styles.btn}>
                                    VER MAIS
                                </button>
                            )}
                        </section>
                    </React.Fragment>
                ))}

                <BtnVoltar />
            </div>
        </>
    );
}
