import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Artista.module.css';
import FormCarrossel from "../../components/Home/FormCarrossel/FormCarrossel"
import Foto from "../../assets/artistas/joao.png"
import Grupo from "../../assets/Group 28.svg";
import AnosCarrossel from '../../components/AnosCarrossel/AnosCarrossel';
import BtnVoltar from '../../components/VoltarBtn/BtnVoltar';
import pessoasArtistas from '../../constants/pessoasArtistas.json'
import participacoesData from '../../constants/participacoes.json'



const importImagem = (fileName) => {
  return new URL(`../../assets/artistas/${fileName}`, import.meta.url).href;
};


function getParticipacoesDoArtista(personId) {
  const resultado = []

  for (const ano in participacoesData) {
    const dadosAno = participacoesData[ano]
    let encontrouNoAno = false

    for (const categoria in dadosAno) {
      if (encontrouNoAno) break

      const bloco = dadosAno[categoria]

      if (Array.isArray(bloco)) {
        if (bloco.includes(personId)) {
          encontrouNoAno = true
        }
      } else {
        for (const papel in bloco) {
          if (bloco[papel].includes(personId)) {
            encontrouNoAno = true
            break
          }
        }
      }
    }
    if (encontrouNoAno) {
      resultado.push({ ano })
    }
  }
  
  return resultado
}

export default function Artista() {
  useEffect(() => window.scrollTo(0, 0), [])

  const { personId } = useParams()
  const artista = pessoasArtistas[personId]


  if (!artista) {
    return <p>Artista não encontrado.</p>
  }

  const participacoes = getParticipacoesDoArtista(personId).map(p => ({
    ano: p.ano,
    fotoURL: importImagem(artista.imgFile)
  }))

  return (
    <>
      <div className={styles.cabecalho}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{artista.name}</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.conteudo}>
          <img
            src={importImagem(artista.imgFile)}
            alt={artista.name}
            className={styles.foto}
          />

          <section className={styles.sectionTexts}>
            <p>{artista.bio || "Sem biografia disponível."}</p>

            {artista.fontes?.length > 0 && (
              <>
                <p>Fontes:</p>
                {artista.fontes.map((fonte, i) => (
                  <p className={styles.nowrap} key={i}>
                    <a href={fonte.url} target="_blank" rel="noopener noreferrer">
                      {fonte.texto}
                    </a>
                  </p>
                ))}
              </>
            )}
          </section>


        </div>
      </div>


      
      <div className={styles.container}>
        <img src={Grupo} className={styles.group28Gradiente} alt="" />

        {participacoes.length > 0 && artista.name !== "João Aveleira" && (
          <section className={styles.carrosselContainer}>
            <AnosCarrossel participacoes={participacoes} />
          </section>
        )}

        {artista.depoimento && (
          <>
            <h2 className={styles.sectionTitle}>DEPOIMENTO</h2>
            
            <section className={styles.card}>
              <div className={styles.depoimentoContent}>
                <p>{artista.depoimento}</p>
              </div>
            </section>
          </>
        )}

        <h2 className={styles.sectionTitle}>LINKS</h2>

        <section className={styles.card}>
          <div className={styles.links}>
            {artista.socials?.instagram && (
              <a href={artista.socials.instagram} target="_blank">
                <i className="ri-instagram-line"></i><span>Instagram</span>
              </a>
            )}
            {artista.socials?.youtube && (
              <a href={artista.socials.youtube} target="_blank">
                <i className="ri-youtube-line"></i><span>YouTube</span>
              </a>
            )}
            {artista.socials?.facebook && (
              <a href={artista.socials.facebook} target="_blank">
                <i className="ri-facebook-box-line"></i><span> Facebook</span>
              </a>
            )}
              

            {!artista.socials && (
              <p className={styles.noLinksText}>Sem links disponíveis</p>
            )}
          </div>
        </section>

        <BtnVoltar />
      </div>
    </>
  )
}