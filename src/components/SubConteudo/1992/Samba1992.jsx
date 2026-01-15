import React from 'react'
import styles from './SambaConteudo.module.css'

import Filipeta from '../../../assets/1992/1992 Eco no ar.jpg'
import musica from '../../../assets/musicas/1992 Regravação - Eco no ar.mp3'
import Grupo from "../../../assets/Group 28.svg"

import BtnVoltar from '../../VoltarBtn/BtnVoltar'
import { Link } from 'react-router-dom'

import pessoas from '../../../constants/pessoasArtistas.json'
import participacoes from '../../../constants/participacoes.json'

const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};

export default function SambaContent() {

  const ano = "1992"

  const interpretesIds =
    participacoes[ano]?.samba?.interpretes || []

  const autoresIds =
    participacoes[ano]?.samba?.autores || []



  function scrollCarrossel(direcao) {
    const container = document.getElementById('carrossel');
    const item = container.querySelector('[data-item]');

    if (!item) return;

    const itemStyle = window.getComputedStyle(item);
    const itemWidth = item.offsetWidth + parseInt(itemStyle.marginRight || 0);
    console.log(itemWidth)
    container.scrollBy({


      left: direcao * itemWidth,
      behavior: 'smooth',
    });
  }


  return (
    <>

      <div className={styles.cabecalho}>

        <h2 className={styles.titulo}>Desfile 1992, Ano 27 - Samba</h2>
        <p className={styles.texto}>
          Texto samba.


        </p>
      </div>

      <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor ondulado"
      />

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Eco no ar</h2>
        <section className={styles.card}>
          <div className={styles.lyricsImageWrapper}>
            <div className={styles.letra}>
              <p>
                Chafurdando no espelho da Lagoa<br />
                Esticando uma onda lá no bar<br />
                Essa onda é uma onda muito boa <br />
                É do tamanho do abraço do tamanduá<br />
                Eu vi o Redentor anunciando<br />
                As caravelas do Colombo ano 2000<br />
                Eco no ar<br />
                Manda avisar<br />
                Abre seus porões, Brasil<br />
                <br />

                Paraíso das panteras e das piranhas<br />
                Das gatas e dos jaburus<br />
                Reserva mundial <br />
                De cobra e de aranha<br />
                Mata virgem na fronteira do Peru<br />
                Eco no ar de norte a sul<br />
                <br />

                Sou lixo<br />
                Sei que sou lixo<br />
                O Ibama do Suvaco<br />
                Tá soltando os bichos<br />
                Sou lixo<br />
                Sou lixo sim<br />
                Tenho que me reciclar em cada botequim<br />
                <br />
                E no jardim vamos plantar (BIS)<br />
                Muito barulho pro Suvaco defumar<br />
               
              </p>
            </div>

            <div className={styles.imageContainer}>
              <img src={Filipeta} className={styles.filipetaImage} alt="Filipeta do samba" />
              <p className={styles.caption}>
                Legenda.
              </p>
            </div>
          </div>
        </section>


        {/* BLOCO: Música */}
        <h2 className={styles.sectionTitle}>ESCUTE A MÚSICA</h2>
        <section className={styles.card}>

          <div className={styles.flexSong}>
            <audio controls className={styles.audio}>
              <source src={musica} type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>

            {interpretesIds.map(personId => {
              const interprete = pessoas[personId]
              if (!interprete) return null

              return (
                <div key={personId} className={styles.profile}>
                  <span className={styles.interprete}>INTÉRPRETE</span>

                  <Link to={`/artista/${personId}`}>
                    <img
                      className={styles.avatar}
                      src={importImagem(interprete.imgFile)}
                      alt={interprete.name}
                    />
                    <span className={styles.nome}>{interprete.name}</span>
                  </Link>
                </div>
              )
            })}

          </div>

        </section>

        {/* BLOCO: Autores */}
        <h2 className={styles.sectionTitle}>AUTORES</h2>
        <section className={styles.card}>
          <div className={styles.carrosselWrapper}>
            <button
              className={`${styles.seta} ${styles.esquerda}`}
              onClick={() => scrollCarrossel(-1)}
            >
              &#10094;
            </button>

            <div className={styles.carrossel} id="carrossel">
              {autoresIds.map(personId => {
                const autor = pessoas[personId]
                if (!autor) return null

                return (
                  <div key={personId} className={styles.profile} data-item>
                    <Link to={`/artista/${personId}`} className={styles.autorLink}>
                      <img
                        className={styles.avatar}
                        src={importImagem(autor.imgFile)}
                        alt={autor.name}
                      />
                      <span className={styles.nome}>{autor.name}</span>
                    </Link>
                  </div>
                )
              })}
            </div>

            <button
              className={`${styles.seta} ${styles.direita}`}
              onClick={() => scrollCarrossel(1)}
            >
              &#10095;
            </button>
          </div>
        </section>

        <BtnVoltar></BtnVoltar>
      </div>

    </>





  );
}
