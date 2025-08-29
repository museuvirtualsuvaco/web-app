import React from "react";

import styles from './FormCarrossel.module.css'

import foto86 from '../../../assets/imgCarrossel/rect86.png'
import foto12 from '../../../assets/imgCarrossel/rect12.png'
import foto87 from '../../../assets/imgCarrossel/rect87.png'
import foto88 from '../../../assets/imgCarrossel/rect88.png'
import foto89 from '../../../assets/imgCarrossel/rect89.png'
import foto90 from '../../../assets/imgCarrossel/rect90.png'
import foto91 from '../../../assets/imgCarrossel/rect91.png'
import foto92 from '../../../assets/imgCarrossel/rect92.png'
import foto93 from '../../../assets/imgCarrossel/rect93.png'
import foto94 from '../../../assets/imgCarrossel/rect94.png'
import foto95 from '../../../assets/imgCarrossel/rect95.png'


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
            <img src={foto86} alt="Ano 1986" />
          </a>
          <a href="/2012" className={styles.item} data-item>
            <img src={foto12} alt="Ano 2012" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto87} alt="Ano 1987" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto88} alt="Ano 1988" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto89} alt="Ano 1989" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto90} alt="Ano 1990" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto91} alt="Ano 1991" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto92} alt="Ano 1992" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto93} alt="Ano 1993" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto94} alt="Ano 1994" />
          </a>
          <a href="#" className={styles.item} data-item>
            <img src={foto95} alt="Ano 1995" />
          </a>
        </div>
        <button className={`${styles.seta} ${styles.direita}`} onClick={() => scrollCarrossel(1)}>&#10095;</button>

      </div>
    </div>
  )
}