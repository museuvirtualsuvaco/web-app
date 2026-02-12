import React from "react";
import styles from "./ProjetoMuseu.module.css";
import BtnVoltar from "../VoltarBtn/BtnVoltar";
import logoUFRJ from "../../assets/ufrj-horizontal-cor-rgb-telas 1.svg";
import logoIC from "../../assets/Sem títuloaaaaa 1.svg";
import logoEBA from "../../assets/307093807_543650020901618_4682476023594602429_n 1.png";
import divisor from "../../assets/Group 28.svg";

import { textsMuseu } from "../../constants/ProjetoMuseu/texts.data.js";
import TextBox from "./TextBox/TextBox.jsx";
import Equipe from "./Equipe/Equipe.jsx";

const ProjetoMuseu = () => {


  //IDs das seções do arquivo texts.data.js pra mapear as seções e seus textos
  const sections = ["pesquisa", "projeto", "midia", "objetivos", "metodologia"]

  return (
    <div>

      <main className={styles.introSection}>

        {/*Cabeçalho*/}
        <section className={styles.homeText}>
          <p>
            Qual é o papel de universidades como a UFRJ e da sociedade em geral
            na preservação e divulgação da memória do carnaval de rua do Rio de
            Janeiro?
          </p>

          <p>
            Essa indagação foi a motivação para a criação do projeto de extensão
            “Museu virtual do carnaval de rua do Rio de Janeiro – O bloco Suvaco
            do Cristo”, um dos responsáveis pela revitalização do carnaval de
            rua carioca. Através de uma parceria entre a presidência do bloco e
            o Instituto de Computação (IC/UFRJ), nasceu a ideia de construir um
            espaço para que essa história seja contada e continuada.
          </p>
        </section>

        <div className={styles.homeLogo}>
          <img className={styles.logoUfrj} src={logoUFRJ} alt="Logo UFRJ" />
          <img className={styles.logoIc} src={logoIC} alt="Logo IC" />
          <img className={styles.logoEba} src={logoEBA} alt="Logo História da Arte" />
        </div>

        <img src={divisor} className={styles.group28Gradiente} alt="divisor ondulado" />



        <section className={styles.areaVerde}>

          {/*Criação das seções de texto*/}

          {sections.map((id, index) => (
            <TextBox key={index} data={textsMuseu[id]}></TextBox>
          ))}


          <Equipe></Equipe>

          <BtnVoltar />


          <div className={styles.greenSpace}></div>
        </section>

      </main>
    </div>
  );
};

export default ProjetoMuseu;