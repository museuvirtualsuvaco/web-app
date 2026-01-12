import React from 'react';
import styles from './SambaConteudo.module.css';
import { Link } from 'react-router-dom';
import Filipeta from '../../../assets/FilipetaSamba1986.jpg';
import Autores from '../Artistas.json';
import Musicos from '../Musicos.json';
import Interpretes from '../Interpretes.json';
import musica from '../../../assets/musicas/1986musica.mp3';
import Grupo from "../../../assets/Group 28.svg";
import Pessoas from '../Pessoas.json';
import BtnVoltar from '../../VoltarBtn/BtnVoltar';




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

        <h2 className={styles.titulo}>Desfile 1986, Ano 01 - Samba</h2>
        <p className={styles.texto}>
         O primeiro samba, intitulado “Divinas Axilas”, foi uma criação coletiva. Possivelmente, diversos membros fundadores do bloco participaram da composição. Xico Chaves? Jards Macalé? Quem mais? Mas a autoria que ficou registrada na filipeta da época foi de João Avelleira, Arnaldo Chaim e José Lavigne, com sugestões do presidente do bloco Força Jovem do Horto,  Roberto de Assis (conhecido pelo apelido de Pirulito). A canção ironizava a maior parte dos sambas enredos pela obrigatoriedade de referências a temas nacionais, citando as localidades da Rocinha e Humaitá e povos indígenas Tamoios  e Tupinambás, obrigatoriedade já satirizada no "Samba do Crioulo Doido" do grande Stanislau Ponte Preta.  Embora explicações mais glamourizadas, anos mais tarde tenham surgido, era apenas mais uma brincadeira irreverente, como todo o bloco. (Ver documentário dos 20 anos do bloco, da diretora Paola Vieira, em breve aqui no nosso portal).
        </p>


          <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor ondulado"
      />

      </div>

    
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>DIVINAS AXILAS</h2>
        <section className={styles.card}>
          <div className={styles.lyricsImageWrapper}>
            <div className={styles.letra}>
              <p>
                Venham ver,<br />
                O odor do Redentor nos inspirou,<br />
                Sob o manto protetor<br />
                Das divinas axilas<br />
                Brincamos nesta festa com amor.<br /><br />
                E contrariando<br />
                As leis do Criador<br />
                Cristo Redentor<br />
                Libertando-nos do mal<br />
                Desceu do céu e vem brincar o carnaval.<br /><br />
                (BIS)<br />
                Gávea Pequena, Rocinha, Humaitá,<br />
                Índios Tamoios, ilustres Tupinambás,<br />
                Mas venham ver.
              </p>
            </div>

            <div className={styles.imageContainer}>
              <img src={Filipeta} className={styles.filipetaImage} alt="Filipeta do samba" />
              <p className={styles.caption}>
                Filipeta com a letra do Samba distribuída no desfile de 1986. Patrocínio das Casas da Banha (que também ofereceram a kombi de som).
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
            

          {Interpretes["1986"] && Object.entries(Interpretes["1986"]).map(([key, dadosParciais]) => {     
            const interprete = getDadosCompletos(dadosParciais);     
            return(
              <div key={key} className={styles.profile}>
                  <span className={styles.interprete}>INTÉRPRETE</span>
                  {/* 2. Link corrigido para 'interprete' em vez de 'musico' */}
                  <Link to={`/artista/interprete/1986/${key}`}>
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
      {Object.entries(Autores["1986"]).map(([key, dadosParciais]) => {
        const autor = getDadosCompletos(dadosParciais);
        return(
        <div key={key} className={styles.profile} data-item>
          <Link to={`/artista/samba/1986/${key}`} className={styles.autorLink}>
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
