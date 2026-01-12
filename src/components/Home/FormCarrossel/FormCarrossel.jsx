import React from "react";

import styles from './FormCarrossel.module.css'

import anos from '../../../constants/anos'


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
           {anos.map((item) => (
             <a key={item.nome} href={`/${item.nome}`} className={`${styles.item} ${item.disabled ? styles.disabled : ""}`} data-item
             
             onClick={(e) => {
              if (item.disabled) {
                e.preventDefault();
                return;
              
              }
                
             }}
            
            >
              <img src={item.src} alt={`Ano ${item.nome}`} />
            </a>
          ))}
        </div>
        <button className={`${styles.seta} ${styles.direita}`} onClick={() => scrollCarrossel(1)}>&#10095;</button>

      </div>
    </div>
  )
}