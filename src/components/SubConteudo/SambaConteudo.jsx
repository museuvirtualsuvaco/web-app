import React from 'react';
import styles from './SambaConteudo.module.css';
import Filipeta from '../../assets/FilipetaSamba1986.jpg';
import Autores from './Artistas.json'

export default function SambaContent() {
  return (
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
        <audio controls className={styles.audio}>
          <source src="/musica.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </section>

      {/* BLOCO: Autores */}
      <h2 className={styles.sectionTitle}>AUTORES</h2>
      <section className={styles.card}>
        <div className={styles.profileRow}>
          {Object.entries(Autores["1986"]).map(([key, autor]) => (
            <div key={key} className={styles.profile}>
              <div className={styles.avatar}>
                {/* <img src={autor.imgPath} alt={autor.name} /> */}
              </div>
              <span className={styles.nome}>{autor.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO: Bateria */}
      <h2 className={styles.sectionTitle}>BATERIA</h2>
      <section className={styles.card}>
        <div className={styles.profileRow}>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className={styles.profile}>
              <div className={styles.avatar}></div>
              <span className={styles.nome}>Nome Sobrenome</span>
            </div>
          ))}
        </div>

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

      </section>
    </div>
  );
}
