import React from 'react'
import styles from './CamisetaConteudo.module.css'

import CamisaFoto from '../../../assets/camisetas/Camiseta 2012 Edgar.png'
import Grupo from "../../../assets/Group 28.svg"
import BtnVoltar from '../../VoltarBtn/BtnVoltar'
import { Link } from 'react-router-dom'

import pessoas from '../../../constants/pessoasArtistas.json'
import participacoes from '../../../constants/participacoes.json'


const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};

export default function CamisetaContent() {

  const ano = "2012"

  const artistasIds =
    participacoes[ano]?.camiseta || []


  return (

    <>
      <div className={styles.cabecalho}>


        <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Camiseta</h2>
        <p className={styles.texto}>
          A Camiseta de 2012, criada por Edgar Fonseca, contém uma representação da vista aérea do bloco desfilando na rua Jardim Botânico. Na frente, a multidão sem rostos distinguíveis se aglomera em meio a guarda-sóis de vendedores, bandeiras ao vento, e muitas cores fundindo umas com as outras. Acima, o Corcovado com sua bela estátua e um céu azul salpicado de nuvens brancas. O desenho da camiseta contém detalhes mundanos, como os semáforos da rua e os prédios do bairro. O artista acrescentou um detalhe cômico, escrevendo “você está aqui”, com uma seta para a multidão. Esse último elemento imita a função de mapas que ajudam o observador a se localizar, evocando um sentimento de se “perder na folia”. As costas da camiseta complementam a arte, com os foliões representados por pontos coloridos e alguns guarda-sóis em cima de um fundo branco

        </p>

      </div>

      <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor ondulado"
      />

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>A CAMISETA</h2>
        <section className={styles.card}>
          <div className={styles.imgCamisetaWrapper}>
            <img src={CamisaFoto} className={styles.imgCamiseta} alt="" />
          </div>
        </section>

        {/* BLOCO: Autores */}
        <h2 className={styles.sectionTitle}>ARTISTA</h2>
        <section className={styles.card}>
          <div className={styles.profileRow}>
            {artistasIds.map(personId => {
              const artista = pessoas[personId]
              if (!artista) return null

              return (
                <div key={personId} className={styles.profile}>
                  <Link
                    to={`/artista/${personId}`}
                    className={styles.autorLink}
                  >
                    <img
                      className={styles.avatar}
                      src={importImagem(artista.imgFile)}
                      alt={artista.name}
                    />
                    <span className={styles.nome}>{artista.name}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* BLOCO: Bateria */}
        {/* <h2 className={styles.sectionTitle}>CURIOSIDADES</h2>
      <section className={styles.card}>

        <p className={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor porttitor dictum. Curabitur mollis neque scelerisque nunc dapibus  cursus. Morbi egestas sapien neque. Phasellus sagittis consectetur  elementum. Vivamus mattis porta dapibus. Sed eu odio mollis, sagittis  lectus nec, rutrum odio. Maecenas vel dapibus dolor. Fusce ligula  ligula, molestie at lectus in, porttitor egestas libero. Nulla facilisi. Vestibulum varius tortor ligula, ut volutpat risus vestibulum quis.  Praesent laoreet nisi lectus, nec ornare orci facilisis ut. Duis  consectetur viverra malesuada.
        </p>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <div className={styles.imgBoxGrande}></div>
          <div className={styles.imgBox}></div>
          <div className={styles.imgBox}>
            <button className={styles.btn}>VER MAIS</button>
          </div>
        </div>
      </div>

      </section> */}

        <BtnVoltar></BtnVoltar>
      </div>
    </>
  );
}
