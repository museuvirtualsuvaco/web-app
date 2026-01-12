import React from 'react';
import styles from './SambaConteudo.module.css';
import Filipeta from '../../../assets/2012/ventarolas.jpeg';
import Autores from '../Artistas.json'
import Musicos from '../Musicos.json'
import musica from '../../../assets/musicas/2012 Suvaco Samba Palmas pro Suvaco.mp3'
import Grupo from "../../../assets/Group 28.svg";
import BtnVoltar from '../../VoltarBtn/BtnVoltar';
import Interpretes from '../Interpretes.json';
import Pessoas from '../Pessoas.json';
import { Link } from 'react-router-dom';

const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};

export default function SambaContent() {
const getDadosCompletos = (dadosDoAno) => {
    if (!dadosDoAno || !dadosDoAno.pessoaId) return dadosDoAno;     
    const dadosMestres = Pessoas[dadosDoAno.pessoaId];
    
    if (dadosMestres) {
      return { ...dadosMestres, ...dadosDoAno };
    }
    return dadosDoAno;
};
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

    <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Samba</h2>
     <p className={styles.texto}>
              O samba-enredo retrata a essência do Carnaval como uma celebração coletiva e participativa, descrevendo a chegada da bateria como um grupo de foliões que se integram à festa, com a letra evocando os sons dos instrumentos e o espírito descontraído. A canção convida o público a se tornar parte ativa do desfile através do refrão "bate palma", simbolizando a união em que o ritmo dos tambores e os aplausos se fundem em um só coração pulsante. Por fim, a obra presta uma breve homenagem a outros blocos icônicos do Rio de Janeiro, reconhecendo a rica e interligada tradição do carnaval de rua da cidade.

    
            </p>
    </div>

    <img
              src={Grupo}
              className={styles.group28Gradiente}
              alt="divisor ondulado"
            />

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>PALMAS PARA BATERIA DO SUVACO</h2>
        <section className={styles.card}>
          <div className={styles.lyricsImageWrapper}>
            <div className={styles.letra}>
              <p>
                A bateria vai chegando<br/>
                Tra tra tra tra<br/>
                Ouve  a virada do repique <br/>
                Tacatacatacatacata<br/>
                Tan Tam tá muito louco<br/>
                Achando que bebeu pouco<br/>
                E já bebeu um alambique<br/>
                <br/>
                A bateria vai chegando<br/>
                Tra tra tra tra<br/>
                Ouve  a virada do repique <br/>
                Tacatacatacatacata<br/>
                Xequerê no xererê<br/>
                Reco reco no boteco<br/>
                Chega chacoalhando wisque<br/>
                <br/>
                A bateria quer bater<br/>
                Fazer bater o coração    <br/>
                E quem é do suvaco<br/>
                Vai na palma da mão,<br/>
                <br/>
                Bate palma pro caminho abrir<br/>
                Bate palma e não deixa cair            <br/>
                Bate palma  e canta pra subir<br/>
                <br/>
                Bate palmas o suvaco chegou<br/>
                Bate palmas pra mim meu amor<br/>
                E é com esse suvaco que vou<br/>
                <br/>
                Palmas pro Suvaco pela nossa "simpatia quase amor"<br/>
                É um "monobloco" que a tantos outros blocos inspirou<br/>
                <br/>
                A "banda de ipanema" "pede passagem" pra "banda braguinha"<br/>
                "imprensa que eu gamo" e "vem ni mim que eu sou facinha"<br/>
                <br/>
                Carmelitas tira a cinta liga e vem dançar <br/>
                São tantos blocos na rua,  meu amor,<br/>
                Me beija e deixa o suvaco passar<br/>
                <br/>
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

        {Interpretes["2012"] && Object.entries(Interpretes["2012"]).map(([key, dadosParciais]) => {     
            const interprete = getDadosCompletos(dadosParciais);     
            return(
              <div key={key} className={styles.profile}>
                  <span className={styles.interprete}>INTÉRPRETE</span>
                  {/* 2. Link corrigido para 'interprete' em vez de 'musico' */}
                  <Link to={`/artista/interprete/2012/${key}`}>
                    <img
                      className={styles.avatar}
                      src={importImagem(interprete.imgFile)}
                      alt={interprete.name}
                    />
                    <span className={styles.nome}>{interprete.name}</span>
                  </Link>
                </div>
              );
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
      {Object.entries(Autores["2012"]).map(([key, dadosParciais]) => {
        const autor = getDadosCompletos(dadosParciais);
        return(
        <div key={key} className={styles.profile} data-item>
          <Link to={`/artista/samba/2012/${key}`} className={styles.autorLink}>
          <img
            className={styles.avatar}
            src={importImagem(autor.imgFile)}
            alt={autor.name}
          />
          <span className={styles.nome}>{autor.name}</span>
          </Link>
        </div>
        );
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
