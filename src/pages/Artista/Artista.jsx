import React from 'react';
import styles from './Artista.module.css';
import FormCarrossel from "../../components/Home/FormCarrossel/FormCarrossel"
import Foto from "../../assets/artistas/joao.png"
import Grupo from "../../assets/Group 28.svg";


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

function Artista() {
  return (
    <>
  <div className={styles.cabecalho}>
  <div className={styles.header}>
    <h2 className={styles.titulo}>João Avelleira</h2>
    <div className={styles.line}></div>
  </div>

  <div className={styles.conteudo}>
    <section className={styles.sectionTexts}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.   
      </p>
    </section>

    <img
      src={Foto}
      alt="João Avelleira"
      className={styles.foto}
    />
  </div>
</div>
    <img
        src={Grupo}
        className={styles.group28Gradiente}
        alt="divisor ondulado"
    />
    
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FOTOS</h2>
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

        </section>

        <section className={styles.carrosselContainer}>
          <h2 className={styles.sectionTitle}>ANOS</h2>
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

            </div>
        </section>

        <h2 className={styles.sectionTitle}>LINKS</h2>
        <section className={styles.card}>
                      <div className={styles.links}>
          
                          <a href="https://www.instagram.com/joaoavelleira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                              <i className="ri-instagram-line"></i><span> Instagram</span>
                          </a>
                          <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                              <i className="ri-youtube-line"></i><span> Youtube</span>
                          </a>
                          <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                              <i className="ri-facebook-box-line"></i><span> Facebook</span>
                          </a>
                      </div>
        </section>
      </div>
    
  </>
  );
}

export default Artista;
