import React from 'react';
import styles from './SambaConteudo.module.css';
import { Link } from 'react-router-dom';
import Filipeta from '../../../assets/1987/samba/1987 Suvaco e meu ninho.jpg';
import Autores from '../Artistas.json';

import Interpretes from '../Interpretes.json';

import Grupo from "../../../assets/Group 28.svg";

import pessoas from '../../../constants/pessoasArtistas.json'
import participacoes from '../../../constants/participacoes.json'

import BtnVoltar from '../../VoltarBtn/BtnVoltar';




const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};


export default function SambaContent() {

  const ano = "1987"

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

        <h2 className={styles.titulo}>Desfile 1987, Ano 02 - Samba</h2>
        <p className={styles.texto}>
          Em construção!
        </p>


        <img
          src={Grupo}
          className={styles.group28Gradiente}
          alt="divisor ondulado"
        />

      </div>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>SUVACO É MEU NINHO</h2>
        <section className={styles.card}>
          <div className={styles.lyricsImageWrapper}>
            <div className={styles.letra}>
              <p>
                Quem vem lá <br />
                Do infinito azul do céu <br />
                Esse imenso troféu<br />
                Que perfume tão rico<br />
                Alguém acreditou no que viu<br />
                Fez fé acompanhou e subiu<br /><br />
                O Suvaco do Cristo subiu a ladeira<br />
                Da primeira vez que o bloco saiu<br />
                Todo mundo no passo da porta-bandeira<br />
                E na brincadeira o Cristo sorriu<br /><br />
                Não é milagre<br />
                Nem maldição<br />
                Quem fala mal<br />
                Não tem vez<br /><br />

                Revoa cardeal meu passarinho (bis)<br />
                Que o Suvaco é meu ninho<br />
                Joga o bispo no xadrez<br />

              </p>
            </div>

            <div className={styles.imageContainer}>
              <img src={Filipeta} className={styles.filipetaImage} alt="Filipeta do samba" />
              <p className={styles.caption}>
                Filipeta com a letra do Samba distribuída no desfile de 1987.
              </p>
            </div>
          </div>
        </section>


        {/* BLOCO: Música */}
        <h2 className={styles.sectionTitle}>ESCUTE A MÚSICA</h2>
        <section className={styles.card}>

          <div className={styles.flexSong}>
            <p className={styles.texto}>Áudio indisponível</p>

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


        {/* BLOCO: Musicos */}
        {/* <h2 className={styles.sectionTitle}>MÚSICOS</h2>
        <section className={styles.card}>
          <div className={styles.profileRow}>
            {Object.entries(Musicos["1986"]).map(([key, musico]) => (
              <div key={key} className={styles.profile}>

              <Link to={`/artista/musico/1986/${key}`}>
                <img
                  className={styles.avatar}
                  src={importImagem(musico.imgFile)}
                  alt={musico.name}
                  />
                <span className={styles.nome}>{musico.name}</span>
              </Link>
                <span className={styles.funcao}>{musico.funcao}</span>
              </div>
            ))}
          </div>



        </section> */}

        <BtnVoltar></BtnVoltar>
      </div>

    </>





  );
}
