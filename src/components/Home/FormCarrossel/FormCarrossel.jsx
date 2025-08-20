import React from "react";

import styles from './FormCarrossel.module.css'


export default function FormCarrossel() {

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
    <div className={styles.container}>
      <form className={styles.mainContainer} action="" method="get">

        <div className={styles.inputContainer}>
          <label className={styles.buscarAnos} htmlFor="busca">Buscar Anos</label>
          <input type="text" name="busca" id="busca" />
        </div>

      </form>
      <div className={styles.carrosselWrapper}>
        <button className={`${styles.seta} ${styles.esquerda}`} onClick={() => scrollCarrossel(-1)} >&#10094;</button>


        <div className={styles.carrossel} id="carrossel">
          <a href="/1986" className={styles.item} data-item>
            <img src="/src/assets/imgCarrossel/rect86.png" alt="Ano 1986" />
          </a>
          <a href="/2012" className={styles.item} data-item>
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
  )
}