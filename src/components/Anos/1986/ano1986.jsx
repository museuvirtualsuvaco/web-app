import React from "react";
import styles from "./ano1986.module.css"
import Card from "./cards/cards";

import { cardsData } from "./cards/cardsData";

export default function Ano1986(){

    return (<>
        
        <div className={styles.title}>
            <h2 className={styles.blueTitles}>Desfile 01</h2>
            <div className={styles.line}></div>
            <h2 className={styles.greenTitles}>Ano 1986</h2>
        </div>
        <img src={'src/assets/Turma da maria Angelica 1986.jpg'} className={styles.floatImage} />
        <section className={styles.sectionTexts}>
            <p> O Rio de Janeiro passou por um esvaziamento do carnaval de rua nas 
                décadas de 1960 e 1970. Com algumas poucas exceções, como a Banda de 
                Ipanema e o Charme da Simpatia, apenas pequenos grupos isolados se 
                reuniam, principalmente na zona norte da cidade.</p>

            <p>
                O contexto político também não estimulava a ocupação das ruas e o 
                carnaval se encontrava bastante limitado às escolas de samba e blocos oficiais, 
                desfilando no centro da cidade. Com a redemocratização e o 
                movimento das Diretas Já, em 1984, esse contexto começa a mudar.
            </p>

            <p>
                Em 1985, saem pela primeira vez o bloco Simpatia é Quase Amor, em Ipanema, 
                e o  bloco Barbas, em Botafogo. Em 1986, é a vez do Suvaco do Cristo. 
                A proposta desses blocos é libertária. Como diria João Bosco: “Não põe 
                corda no meu bloco". Muito dessa história pode ser encontrada na 
                dissertação da jornalista Maria Rita Dias de Almeida Fernandes, Meu 
                bloco na rua: Barbas, Simpatia e Suvaco na retomada do carnaval de 
                rua da zona sul do Rio de Janeiro.
            </p>

        
        </section>

        <img src={'src/assets/Exclude(1).svg'} className={styles.divisorGradiente} alt="" />

        {cardsData.map((data, index) =>{
            return <Card key ={index} {...data}></Card>
        })}
        
    </>)
}