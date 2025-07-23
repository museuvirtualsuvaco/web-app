import React from 'react';
import styles from './CamisetaConteudo.module.css';

export default function CamisetaContent() {
  return (
  
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>A CAMISETA</h2>
      <section className={styles.card}>
      <div className={styles.imgCamisetaWrapper}>
        <div className={styles.imgCamiseta}></div>
        <div className={styles.imgCamiseta}></div>
        </div>
      </section>

      {/* BLOCO: Autores */}
      <h2 className={styles.sectionTitle}>ARTISTAS</h2>
      <section className={styles.card}>
        <div className={styles.profileRow}>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className={styles.profile}>
              <div className={styles.avatar}></div>
              <span className={styles.nome}>Nome Sobrenome</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO: Bateria */}
      <h2 className={styles.sectionTitle}>CURIOSIDADES</h2>
      <section className={styles.card}>

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
