import React from 'react';
import styles from './SambaConteudo.module.css';
import Filipeta from '../../../assets/FilipetaSamba1986.jpg';
import Autores from '../Artistas.json'
import Musicos from '../Musicos.json'
import musica from '../../../assets/musicas/2012 Suvaco Samba Palmas pro Suvaco.mp3'
import Grupo from "../../../assets/Group 28.svg";


export default function SambaContent() {
  return (
    <>

    <div className={styles.cabecalho}>

    <h2 className={styles.titulo}>Desfile 2012, Ano 27 - Samba</h2>

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
              <span className={styles.nome}>Mu Chebabi</span>
            </div>

          </div>

        </section>
        {/* BLOCO: Música */}
        <h2 className={styles.sectionTitle}>CURIOSIDADES</h2>
        <section className={styles.card}>

          <div className={styles.flexSong}>

          <p className={styles.texto}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla velit impedit omnis officiis quia. Sint laborum facere eligendi sed distinctio fugiat ex eveniet rerum, quia blanditiis non fuga modi tempora?
          Soluta aspernatur impedit eaque mollitia obcaecati assumenda culpa? Autem omnis temporibus praesentium debitis soluta ea consectetur totam veritatis dignissimos quas ipsam quisquam doloremque mollitia dolorem illum, nisi molestiae tempora voluptatibus?
          Velit assumenda, laborum praesentium similique sunt nulla, facere alias, nostrum eos sequi quo. Reprehenderit possimus veritatis suscipit dolores unde, repellendus neque laboriosam tempora aliquid, autem quidem dignissimos. Fugit, vero dolores!
          Dignissimos nostrum ducimus et fugit eligendi eaque excepturi quasi, tempora ullam, reprehenderit facilis repellendus, voluptas dicta. Eum, aliquid accusantium nostrum necessitatibus ducimus similique possimus impedit, dignissimos doloremque, eius iste sapiente.
          Adipisci impedit modi molestiae vitae exercitationem temporibus, ipsum quod aliquam! Nam blanditiis ea corporis eius earum neque. Iure, repudiandae. Vero doloribus quia rem dolore vel cum voluptate deleniti incidunt dolorum.</p>

          </div>

        </section>

        {/* BLOCO: Autores */}
        <h2 className={styles.sectionTitle}>AUTORES</h2>
        <section className={styles.card}>
          <div className={styles.profileRow}>
            {Object.entries(Autores["2012"]).map(([key, autor]) => (
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

    </>
    
    
    
    
    
  );
}
