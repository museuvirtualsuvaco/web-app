import React from "react";
import styles from "./ano1992.module.css";
import Card from "../1992/cards/cards";
import { cardsData } from "../1992/cards/cardsData";


import img1992 from "../../../assets/1992/1992 Suvaco Festa no Vasco Pre Carnaval.jpg";


import vector from "../../../assets/Vector(1).svg";
import group28 from "../../../assets/Group 28.svg";

export default function Ano1992() {
  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.cabecalho}>

        <div className={styles.title}>
          {/*Título do cabeçalho*/}
          <h2 className={styles.blueTitles}>Desfile 1992</h2>
        </div>

          {/*Foto do cabeçalho*/}
        <img src={img1992} className={styles.floatImage} alt="Imagem Desfile 1992" />


        {/*Texto do cabeçalho
        
        Escrito no documento "POR ANO" como "Introdução / Contexto"
        
        */}
        <section className={styles.sectionTexts}>
          <p>
            O ano de 1992 é marcado principalmente pela ocorrência da Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento, também conhecida como ECO-92, na cidade do Rio de Janeiro. Essa era a segunda conferência a reunir os países para conversar sobre meio ambiente e promover propostas para a mitigação dos problemas ambientais. O objetivo central da ECO-92 era propor a ideia de um desenvolvimento sustentável, na qual houvesse um modelo econômico menos consumista e mais pautado em questões ecológicas.
          </p>

          <p>
            A presença de mais de 100 chefes de Estado e de Governo no Rio de Janeiro para a ECO-92 foi um acontecimento sem precedentes. Esse evento refletiu uma mudança importante na geopolítica. Na época, a ideia era de que o meio ambiente deixaria de ser uma pauta secundária de ativistas para se tornar uma prioridade da política internacional. O prestígio diplomático do evento tinha o intuito de demonstrar que a crise ecológica não era mais vista como um problema isolado, mas como uma ameaça que exigia compromissos diretos de todas as nações, incluindo o Brasil.
          </p>
          
          <p>
            Este encontro de caráter político-econômico-ambiental foi abordado de forma irônica pelo bloco Suvaco do Cristo na composição de Lenine, Xico Chaves, Braulio Tavares e Cláudio Lobato denominada “Eco no Ar 92 (Preserve-se)”, com seus foliões comemorando o carnaval carioca com trajes que ironizavam o burburinho em torno do evento como a porta-bandeira Bel Martins vestida de folha e o mestre-sala Cláudio Lobato com uma lata de lixo na cabeça. 

          </p>

        </section>

        
        </div>


      {/*Geração de cards da página*/}
        <div className={styles.sectionCards}>
          <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />
          {cardsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
