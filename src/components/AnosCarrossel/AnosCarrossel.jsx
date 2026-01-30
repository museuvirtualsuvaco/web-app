import React from "react";
import styles from './AnosCarrossel.module.css'; 
import { Link } from 'react-router-dom';

function scrollCarrossel(direcao) {
  const container = document.getElementById('anos-carrossel-artista'); 
  if (!container) return;
  
  const item = container.querySelector('[data-item]');
  if (!item) return;

  const itemStyle = window.getComputedStyle(item);
  const marginRight = parseInt(itemStyle.marginRight || 0); 
  const itemWidth = item.offsetWidth + marginRight;

  container.scrollBy({
    left: direcao * itemWidth,
    behavior: 'smooth',
  });
}

export default function AnosCarrossel({ participacoes }) {
  
  if (!participacoes || participacoes.length === 0) {
    return null; 
  }

  return (
    <div className={styles.anosParticipacaoContainer}> 
      <h2 className={styles.sectionTitle}>ANOS EM DESTAQUE</h2> 
      
      <div className={styles.carrosselWrapper}>
        <button 
          className={`${styles.seta} ${styles.esquerda}`} 
          onClick={() => scrollCarrossel(-1)} 
          aria-label="Rolar para esquerda"
        >
          &#10094;
        </button>
        
        <div className={styles.carrossel} id="anos-carrossel-artista">          
          {participacoes.map((item) => (
            <Link 
              key={item.ano} 
              to={`/${item.ano}`} 
              className={styles.item} 
              data-item
            >
              <img src={item.fotoURL} alt={`Foto do artista em ${item.ano}`} />
              <span className={styles.anoTexto}>{item.ano}</span>
            </Link>
          ))}
        </div>
        
        <button 
          className={`${styles.seta} ${styles.direita}`} 
          onClick={() => scrollCarrossel(1)} 
          aria-label="Rolar para direita"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}