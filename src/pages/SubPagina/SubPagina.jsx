
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
      <Header/>
      <main className={styles.main} >
        <h1 className={styles.titulo}>
          {`Desfile 01, Ano ${ano} - ${categoria?.charAt(0).toUpperCase() + categoria?.slice(1)}`}
        </h1>
        {/* <img 
            src={Vetor} 
            className={styles.divisorGradiente} 
            alt="divisor ondulado" 
        /> */}
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