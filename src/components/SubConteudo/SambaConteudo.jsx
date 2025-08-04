import React from 'react';
import styles from './SambaConteudo.module.css';
import Filipeta from '../../assets/FilipetaSamba1986.jpg';
import Autores from './Artistas.json'
import Musicos from './Musicos.json'
import musica from '../../assets/musicas/1986musica.mp3'


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

        <div className={styles.flexSong}>
          <audio controls className={styles.audio}>
            <source src={musica} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>

          <div className={styles.profile}>
            <span className={styles.interprete}>INTÉRPRETE</span>
            <img className={styles.avatar} src="/src/assets/artistas/nenhum.png" alt="" />
            <span className={styles.nome}>Beto Brown</span>
          </div>

        </div>

      </section>

      {/* BLOCO: Autores */}
      <h2 className={styles.sectionTitle}>AUTORES</h2>
      <section className={styles.card}>
        <div className={styles.profileRow}>
          {Object.entries(Autores["1986"]).map(([key, autor]) => (
            <div key={key} className={styles.profile}>
              {<img className={styles.avatar} src={autor.imgPath} alt={autor.name} />}
              <span className={styles.nome}>{autor.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO: Musicos */}
      <h2 className={styles.sectionTitle}>MÚSICOS</h2>
      <section className={styles.card}>
        <div className={styles.profileRow}>
          {Object.entries(Musicos["1986"]).map(([key, musico]) => (
            <div key={key} className={styles.profile}>

              {<img className={styles.avatar} src={musico.imgPath} alt={musico.name} />}

              <span className={styles.nome}>{musico.name}</span>
              <span className={styles.funcao}>{musico.funcao}</span>
            </div>
          ))}
        </div>

        {/* <p className={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor porttitor dictum. Curabitur mollis neque scelerisque nunc dapibus  cursus. Morbi egestas sapien neque. Phasellus sagittis consectetur  elementum. Vivamus mattis porta dapibus. Sed eu odio mollis, sagittis  lectus nec, rutrum odio. Maecenas vel dapibus dolor. Fusce ligula  ligula, molestie at lectus in, porttitor egestas libero. Nulla facilisi. Vestibulum varius tortor ligula, ut volutpat risus vestibulum quis.  Praesent laoreet nisi lectus, nec ornare orci facilisis ut. Duis  consectetur viverra malesuada.
        </p> */}

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
