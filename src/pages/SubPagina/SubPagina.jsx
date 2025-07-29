
import React from "react";
import styles from "./SubPagina.module.css";
import { useParams } from "react-router-dom";
import SambaContent from "../../components/SubConteudo/SambaConteudo";
import CamisetaContent from "../../components/SubConteudo/CamisetaConteudo";
import Header from "../../components/Header/Header";
import Vetor from "../../assets/Vector(1).svg";
import Grupo from "../../assets/Group 28.svg";

export default function SubPagina() {
  const { ano, categoria } = useParams();   
 return (
    <>
      <main className={styles.main} >
        
        <section >
          <h2 className={styles.titulo}>
            {`Desfile 01, Ano ${ano} - ${categoria?.charAt(0).toUpperCase() + categoria?.slice(1)}`}
          </h2>

          <p className={styles.zIndexVisible}> O Rio de Janeiro passou por um esvaziamento do carnaval de rua nas 
                    décadas de 1960 e 1970. Com algumas poucas exceções, como a Banda de 
                    Ipanema e o Charme da Simpatia, apenas pequenos grupos isolados se 
                    reuniam, principalmente na zona norte da cidade.</p>

                <p className={styles.zIndexVisible}>
                    O contexto político também não estimulava a ocupação das ruas e o 
                    carnaval se encontrava bastante limitado às escolas de samba e blocos oficiais, 
                    desfilando no centro da cidade. Com a redemocratização e o 
                    movimento das Diretas Já, em 1984, esse contexto começa a mudar.
                </p>

                <p className={styles.zIndexVisible}>
                    Em 1985, saem pela primeira vez o bloco Simpatia é Quase Amor, em Ipanema, 
                    e o  bloco Barbas, em Botafogo. Em 1986, é a vez do Suvaco do Cristo. 
                    A proposta desses blocos é libertária. Como diria João Bosco: “Não põe 
                    corda no meu bloco". Muito dessa história pode ser encontrada na 
                    dissertação da jornalista Maria Rita Dias de Almeida Fernandes, Meu 
                    bloco na rua: Barbas, Simpatia e Suvaco na retomada do carnaval de 
                    rua da zona sul do Rio de Janeiro.
                </p>

          {/*Construir um método no qual atualize o texto de resumo do ano conforme a gente 
          entre na página
          
          Do jeito que está, se entrarmos em suvaco/1987, teremos o mesmo texto resumo
          Estou usando o 86 como molde apenas pro CSS*/}
        </section>


       <img 
           src={Grupo} 
           className={styles.group28Gradiente} 
           alt="divisor ondulado" 
        /> 

        <div className={styles.background}>
        {categoria === "samba" && <SambaContent />}
        {categoria === "camiseta" && <CamisetaContent />}
        </div>
      </main>

    </>
  );
}