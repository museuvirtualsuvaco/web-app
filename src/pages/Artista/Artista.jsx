import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Artista.module.css';
import FormCarrossel from "../../components/Home/FormCarrossel/FormCarrossel"
import Foto from "../../assets/artistas/joao.png"
import Grupo from "../../assets/Group 28.svg";
import AnosCarrossel from '../../components/AnosCarrossel/AnosCarrossel';
import Artistas from '../../components/SubConteudo/Artistas.json';
import CamisetaArtistas from '../../components/SubConteudo/CamisetaArtistas.json';
import Musicos from '../../components/SubConteudo/Musicos.json';
import Interpretes from '../../components/SubConteudo/Interpretes.json';
import BtnVoltar from '../../components/VoltarBtn/BtnVoltar';
import Pessoas from '../../components/SubConteudo/Pessoas.json';


const importImagem = (fileName) => {
  return new URL(`../../assets/artistas/${fileName}`, import.meta.url).href;
};

const dataSources = {
  samba: Artistas,
  camiseta: CamisetaArtistas,
  musico: Musicos,
  interprete: Interpretes,
};

function findParticipacoes(pessoaIdProcurado, dataSources) {
  const participacoes = {};

  for (const tipo in dataSources) {
    const fonte = dataSources[tipo];
    for (const ano in fonte) {
      const artistasDoAno = fonte[ano];
      for (const idNumerico in artistasDoAno) {
        const entry = artistasDoAno[idNumerico];

        if (entry.name === pessoaIdProcurado && !participacoes[ano]) {
          const dadosMestre = Pessoas[entry.pessoaId];
          const foto = entry.fotoAno || (dadosMestre ? dadosMestre.imgFile : 'nenhum.png');

          participacoes[ano] = {
            ano: ano,
            fotoURL: importImagem(foto)
          };
        }
      }
    }
  }
  return Object.values(participacoes).sort((a, b) => a.ano.localeCompare(b.ano));
}
//passar função para o componente AnosCarrossel depois
/*function scrollCarrossel(direcao) {
const container = document.getElementById('carrossel');
const item = container.querySelector('[data-item]');

if (!item) return;

const itemStyle = window.getComputedStyle(item);
const itemWidth = item.offsetWidth + parseInt(itemStyle.marginRight || 0);

container.scrollBy({
  left: direcao * itemWidth,
  behavior: 'smooth',
});
}*/

function Artista() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  const { tipo, ano, id } = useParams();
  const dataSource = dataSources[tipo];
  const dadosDoAno = dataSource ? dataSource[ano]?.[id] : undefined;

  let artista = undefined;

  //const participacoes = artista ? findParticipacoes(artista.name, dataSources) : [];

if (dadosDoAno && dadosDoAno.pessoaId) {
      const dadosMestres = Pessoas[dadosDoAno.pessoaId];

      if (dadosMestres) {
          artista = { ...dadosMestres, ...dadosDoAno };
      }
  }

  const participacoes = artista ? findParticipacoes(artista.pessoaId, dataSources) : [];

  if (!artista) {
    return <p>Artista não encontrado.</p>;
  }

  const caminhoCompletoImagem = importImagem(artista.imgFile);

  return (
    <>
      <div className={styles.cabecalho}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{artista.name}</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.conteudo}>
          {caminhoCompletoImagem && (
            <img src={caminhoCompletoImagem} alt={artista.name} className={styles.foto} />
          )}
          <section className={styles.sectionTexts}>
            <p>{artista.bio || "Sem biografia disponível."}</p>
            {artista.fontes && artista.fontes.length > 0 && (
              <>
                <p>Fontes:</p>
                {artista.fontes.map((fonte, index) => (
                  <p className={styles.nowrap} key={index}>
                    <a href={fonte} target="_blank" rel="noopener noreferrer">
                      {fonte}
                    </a>
                  </p>
                ))}
              </>
            )}
          </section>
        </div>

      </div>


      <div className={styles.container}>
        <img
          src={Grupo}
          className={styles.group28Gradiente}
          alt="divisor ondulado"
        />
        {/*  <h2 className={styles.sectionTitle}>FOTOS</h2>
        <section className={styles.card}>

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

        {participacoes.length > 0 && artista.name !== "João Aveleira" && (
          <section className={styles.carrosselContainer}>
            <AnosCarrossel participacoes={participacoes} />
          </section>
        )}

        <section className={styles.carrosselContainer}>{/*
          <h2 className={styles.sectionTitle}>PARTICIPAÇÕES</h2>
          <div className="form-area">

                <div>
                      <div className={styles.carrosselWrapper}>
            <button className={`${styles.seta} ${styles.esquerda}`} onClick={() => scrollCarrossel(-1)} >&#10094;</button>
            
            
              <div className={styles.carrossel} id="carrossel">
                <a href="/1986" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect86.png" alt="Ano 1986" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect12.png" alt="Ano 2012" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect87.png" alt="Ano 1987" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect88.png" alt="Ano 1988" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect89.png" alt="Ano 1989" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect90.png" alt="Ano 1990" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect91.png" alt="Ano 1991" />
                </a>
                 <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect92.png" alt="Ano 1992" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect93.png" alt="Ano 1993" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect94.png" alt="Ano 1994" />
                </a>
                <a href="#" className={styles.item} data-item>
                  <img src="/src/assets/imgCarrossel/rect95.png" alt="Ano 1995" />
                </a>
            
              </div>
            <button className={`${styles.seta} ${styles.direita}`} onClick={() => scrollCarrossel(1)}>&#10095;</button>
            
            </div>
                    </div>

            </div>*/}
        </section>

        <h2 className={styles.sectionTitle}>LINKS</h2>

  <section className={styles.card}>
    <div className={styles.links}>
      {artista.socials && (
  <>
    {artista.socials.instagram ||
    artista.socials.youtube ||
    artista.socials.facebook ? (
      <>
        {artista.socials.instagram && (
          <a href={artista.socials.instagram} target="_blank" rel="noopener noreferrer">
            <span><i className="ri-instagram-line"></i> Instagram</span>
          </a>
        )}

        {artista.socials.youtube && (
          <a href={artista.socials.youtube} target="_blank" rel="noopener noreferrer">
            <span><i className="ri-youtube-line"></i> YouTube</span>
          </a>
        )}

        {artista.socials.facebook && (
          <a href={artista.socials.facebook} target="_blank" rel="noopener noreferrer">
            <span><i className="ri-facebook-circle-line"></i> Facebook</span>
          </a>
        )}
      </>
    ) : (
       <p className={styles.noLinksText}> Sem links disponíveis</p>
    )}
  </>
)}
    </div>
  </section>


        <BtnVoltar></BtnVoltar>
      </div>
      

    </>
  );
}

export default Artista;