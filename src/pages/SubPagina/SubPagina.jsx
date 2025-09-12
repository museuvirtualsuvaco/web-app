
import React from "react";
import styles from "./SubPagina.module.css";
import { useParams } from "react-router-dom";
import SambaContent from "../../components/SubConteudo/1986/Samba1986";
import CamisetaContent from "../../components/SubConteudo/1986/Camiseta1986"
import Desfile86 from "../../components/SubConteudo/1986/Desfile1986"
import SuvacoMidia86 from "../../components/SubConteudo/1986/SuvacoMidia1986"
import Header from "../../components/Header/Header";
import Vetor from "../../assets/Vector(1).svg";
import Grupo from "../../assets/Group 28.svg";
import Resumo from "./resumosAno"

export default function SubPagina() {
  const { ano, categoria } = useParams();
  const anoInicial = 1986;
  const numeroDesfile = ano ? String(Number(ano) - anoInicial + 1).padStart(2, "0") : "??";
  return (
    <>
      <main className={styles.main} >

        <section className={styles.secao}>
          <h2 className={styles.titulo}>
            {`Desfile ${numeroDesfile}, Ano ${ano} - ${categoria?.charAt(0).toUpperCase() + categoria?.slice(1)}`}
          </h2>

          {Resumo[ano] ? (
            Resumo[ano].map((paragrafo, index) => (
              <p key={index} className={styles.zIndexVisible}>{paragrafo}</p>
            ))
          ) : (
            <div className={styles.minHeight}>
              <p className={styles.zIndexVisible}>
              Sem resumo disponível para o ano {ano}.
            </p>
            </div>
            
          )}
        </section>


        <img
          src={Grupo}
          className={styles.group28Gradiente}
          alt="divisor ondulado"
        />

      </main>

    </>
  );
}