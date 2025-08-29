import React from 'react';
import styles from './CamisetaConteudo.module.css';
import CamisaFoto from '../../../assets/camisetas/1986 Camiseta Sonia Matos.jpg';
import Artistas from '../CamisetaArtistas.json'
import Musicos from '../Musicos.json'
import musica from '../../../assets/musicas/1986musica.mp3'
import Grupo from "../../../assets/Group 28.svg";


const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};

export default function CamisetaContent() {
  return (
  
    <>
        <div className={styles.cabecalho}>
        
            <h2 className={styles.titulo}>Desfile 1986, Ano 01 - Camiseta</h2>
        
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
          {Object.entries(Artistas["1986"]).map(([key, autor]) => (
            <div key={key} className={styles.profile}>
              <img
                            className={styles.avatar}
                            src={importImagem(autor.imgFile)}
                            alt={autor.name}
                          />
              <span className={styles.nome}>{autor.name}</span>
            </div>
          ))}
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
    </div>
    </>
  );
}
