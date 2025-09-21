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
import foto96 from '../../../assets/imgCarrossel/rect96.png'
import foto97 from '../../../assets/imgCarrossel/rect97.png'
import foto98 from '../../../assets/imgCarrossel/rect98.png'
import foto99 from '../../../assets/imgCarrossel/rect99.png'
import foto00 from '../../../assets/imgCarrossel/rect00.png'
import foto01 from '../../../assets/imgCarrossel/rect01.png'
import foto02 from '../../../assets/imgCarrossel/rect02.png'
import foto03 from '../../../assets/imgCarrossel/rect03.png'
import foto04 from '../../../assets/imgCarrossel/rect04.png'
import foto05 from '../../../assets/imgCarrossel/rect05.png'
import foto06 from '../../../assets/imgCarrossel/rect06.png'
import foto07 from '../../../assets/imgCarrossel/rect07.png'
import foto08 from '../../../assets/imgCarrossel/rect08.png'
import foto09 from '../../../assets/imgCarrossel/rect09.png'
import foto10 from '../../../assets/imgCarrossel/rect10.png'
import foto11 from '../../../assets/imgCarrossel/rect11.png'
import foto13 from '../../../assets/imgCarrossel/rect13.png'
import foto14 from '../../../assets/imgCarrossel/rect14.png'
import foto15 from '../../../assets/imgCarrossel/rect15.png'
import foto16 from '../../../assets/imgCarrossel/rect16.png'
import foto17 from '../../../assets/imgCarrossel/rect17.png'
import foto18 from '../../../assets/imgCarrossel/rect18.png'
import foto19 from '../../../assets/imgCarrossel/rect19.png'




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
          <a href="/1987" className={styles.item} data-item>
            <img src={foto87} alt="Ano 1987" />
          </a>
          <a href="/1988" className={styles.item} data-item>
            <img src={foto88} alt="Ano 1988" />
          </a>
          <a href="/1989" className={styles.item} data-item>
            <img src={foto89} alt="Ano 1989" />
          </a>
          <a href="/1990" className={styles.item} data-item>
            <img src={foto90} alt="Ano 1990" />
          </a>
          <a href="/1991" className={styles.item} data-item>
            <img src={foto91} alt="Ano 1991" />
          </a>
          <a href="/1992" className={styles.item} data-item>
            <img src={foto92} alt="Ano 1992" />
          </a>
          <a href="/1993" className={styles.item} data-item>
            <img src={foto93} alt="Ano 1993" />
          </a>
          <a href="/1994" className={styles.item} data-item>
            <img src={foto94} alt="Ano 1994" />
          </a>
          <a href="/1995" className={styles.item} data-item>
            <img src={foto95} alt="Ano 1995" />
          </a>
           <a href="/1996" className={styles.item} data-item>
            <img src={foto96} alt="Ano 1996" />
          </a>
          <a href="/1997" className={styles.item} data-item>
            <img src={foto97} alt="Ano 1997" />
          </a>
          <a href="/1998" className={styles.item} data-item>
            <img src={foto98} alt="Ano 1998" />
          </a>
          <a href="/1999" className={styles.item} data-item>
            <img src={foto99} alt="Ano 1999" />
          </a>
          <a href="/2000" className={styles.item} data-item>
            <img src={foto00} alt="Ano 2000" />
          </a>
          <a href="/2001" className={styles.item} data-item>
            <img src={foto01} alt="Ano 2001" />
          </a>
          <a href="/2002" className={styles.item} data-item>
            <img src={foto02} alt="Ano 2002" />
          </a>
          <a href="/2003" className={styles.item} data-item>
            <img src={foto03} alt="Ano 2003" />
          </a>
          <a href="/2004" className={styles.item} data-item>
            <img src={foto04} alt="Ano 2004" />
          </a>
          <a href="/2005" className={styles.item} data-item>
            <img src={foto05} alt="Ano 2005" />
          </a>
          <a href="/2006" className={styles.item} data-item>
            <img src={foto06} alt="Ano 2006" />
          </a>
          <a href="/2007" className={styles.item} data-item>
            <img src={foto07} alt="Ano 2007" />
          </a>
          <a href="/2008" className={styles.item} data-item>
            <img src={foto08} alt="Ano 2008" />
          </a>
          <a href="/2009" className={styles.item} data-item>
            <img src={foto09} alt="Ano 2009" />
          </a>
          <a href="/2010" className={styles.item} data-item>
            <img src={foto10} alt="Ano 2010" />
          </a>
          <a href="/2011" className={styles.item} data-item>
            <img src={foto11} alt="Ano 2011" />
          </a>
          <a href="/2013" className={styles.item} data-item>
            <img src={foto13} alt="Ano 2013" />
          </a>
          <a href="/2014" className={styles.item} data-item>
            <img src={foto14} alt="Ano 2014" />
          </a>
          <a href="/2015" className={styles.item} data-item>
            <img src={foto15} alt="Ano 2015" />
          </a>
          <a href="/2016" className={styles.item} data-item>
            <img src={foto16} alt="Ano 2016" />
          </a>
          <a href="/2017" className={styles.item} data-item>
            <img src={foto17} alt="Ano 2017" />
          </a>
          <a href="/2018" className={styles.item} data-item>
            <img src={foto18} alt="Ano 2018" />
          </a>
          <a href="/2019" className={styles.item} data-item>
            <img src={foto19} alt="Ano 2019" />
          </a>
        </div>
        <button className={`${styles.seta} ${styles.direita}`} onClick={() => scrollCarrossel(1)}>&#10095;</button>

      </div>
    </div>
  )
}