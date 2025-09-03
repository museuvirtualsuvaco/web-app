import React from 'react';
import styles from './SambaConteudo.module.css';
import Filipeta from '../../../assets/FilipetaSamba1986.jpg';
import Autores from '../Artistas.json'
import Musicos from '../Musicos.json'
import musica from '../../../assets/musicas/1986musica.mp3'
import Grupo from "../../../assets/Group 28.svg";




const importImagem = (fileName) => {
  return new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;
};


export default function SambaContent() {

  function scrollCarrossel(direcao) {
    const container = document.getElementById('carrossel');
    const item = container.querySelector('[data-item]');

    if (!item) return;

    const itemStyle = window.getComputedStyle(item);
    const itemWidth = item.offsetWidth + parseInt(itemStyle.marginRight || 0);

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
          O primeiro samba, intitulado “Divinas Axilas”, foi composto por João Avelleira, Arnaldo Chaim e José Lavigne, com sugestões do presidente do bloco Força Jovem do Horto,  Roberto de Assis (conhecido pelo apelido de Pirulito). A canção ironizava a maior parte dos sambas enredos pela obrigatoriedade de referências a temas nacionais, citando as localidades da Rocinha e Humaitá e povos indígenas Tamoios  e Tupinambás, obrigatoriedade já satirizada no "Samba do Crioulo Doido" do grande Stanislau Ponte Preta.  Embora explicações mais glamourizadas, anos mais tarde tenham surgido, era apenas mais uma brincadeira irreverente, como todo o bloco. (Ver documentário dos 20 anos do bloco, da diretora Paola Vieira, em breve aqui no nosso portal).

        </p>

      </div>

      <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor ondulado"
      />

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

              <div className={styles.carrosselWrapper}>
                <button className={`${styles.seta} ${styles.esquerda}`} onClick={() => scrollCarrossel(-1)} >&#10094;</button>
            <div className={styles.carrossel} id="carrossel">


                {Object.entries(Autores["1986"]).map(([key, autor]) => (
                    <div key={key} className={styles.profile} data-item>
                      <img
                        className={styles.avatar}
                        src={importImagem(autor.imgFile)}
                        alt={autor.name}
                      />
                      <span className={styles.nome}>{autor.name}</span>
                    </div>
                  ))}
              <button className={`${styles.seta} ${styles.direita}`} onClick={() => scrollCarrossel(1)}>&#10095;</button>
                </div>
            </div>
          </div>
        </section>

        {/* BLOCO: Musicos */}
        <h2 className={styles.sectionTitle}>MÚSICOS</h2>
        <section className={styles.card}>
          <div className={styles.profileRow}>
            {Object.entries(Musicos["1986"]).map(([key, musico]) => (
              <div key={key} className={styles.profile}>

                <img
                  className={styles.avatar}
                  src={importImagem(musico.imgFile)}
                  alt={musico.name}></img>

                <span className={styles.nome}>{musico.name}</span>
                <span className={styles.funcao}>{musico.funcao}</span>
              </div>
            ))}
          </div>

          {/* <p className={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor porttitor dictum. Curabitur mollis neque scelerisque nunc dapibus  cursus. Morbi egestas sapien neque. Phasellus sagittis consectetur  elementum. Vivamus mattis porta dapibus. Sed eu odio mollis, sagittis  lectus nec, rutrum odio. Maecenas vel dapibus dolor. Fusce ligula  ligula, molestie at lectus in, porttitor egestas libero. Nulla facilisi. Vestibulum varius tortor ligula, ut volutpat risus vestibulum quis.  Praesent laoreet nisi lectus, nec ornare orci facilisis ut. Duis  consectetur viverra malesuada.
          </p> */}


        </section>
      </div>

    </>





  );
}
