import React from 'react'
import styles from './CamisetaConteudo.module.css'

import Grupo from "../../../assets/Group 28.svg"
import BtnVoltar from '../../VoltarBtn/BtnVoltar'
import { Link } from 'react-router-dom'

import pessoas from '../../../constants/pessoasArtistas.json'
import participacoes from '../../../constants/participacoes.json'

{/*Nao esquecer de atualizar aqui, quando criar uma nova página*/}

import CamisaFoto from '../../../assets/1992/1992 xico.JPG'



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

          {/*Título da página*/}
        <h2 className={styles.titulo}>Desfile 1992, Ano 07 - Camiseta</h2>
        
        {/*Texto da camiseta*/}
        <p className={styles.texto}>
          Texto camiseta 2012.

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
