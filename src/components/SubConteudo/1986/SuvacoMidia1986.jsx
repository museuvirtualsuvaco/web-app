import React from 'react';
import styles from './SuvacoMidia86.module.css';

import foto1 from '../../../assets/1985 JB - Nasce o Suvaco.jpg';
import foto2 from '../../../assets/1986 1 Desfila Sonia e Robertinho.jpg';
import foto3 from '../../../assets/1986 JB Carta dos Leitores Revolta.jpg';
export default function SambaContent() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>NA MÍDIA</h2>
      <section className={styles.card}>

        <p className={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor porttitor dictum. Curabitur mollis neque scelerisque nunc dapibus  cursus. Morbi egestas sapien neque. Phasellus sagittis consectetur  elementum. Vivamus mattis porta dapibus. Sed eu odio mollis, sagittis  lectus nec, rutrum odio. Maecenas vel dapibus dolor. Fusce ligula  ligula, molestie at lectus in, porttitor egestas libero. Nulla facilisi. Vestibulum varius tortor ligula, ut volutpat risus vestibulum quis.  Praesent laoreet nisi lectus, nec ornare orci facilisis ut. Duis  consectetur viverra malesuada.
        </p>

        <div className={styles.gridArea}>

        <div className={styles.gridVisual}>
          <img src={foto1} className={styles.imgBoxGrande} alt="" />
          <img src={foto2} className={styles.imgBox} alt="" />
            <div className={styles.lastBox}>

              <img src={foto3} className={styles.imgBox} alt="" />

                <button className={styles.btn}>VER MAIS</button>
            </div>
        </div>
      </div>

      </section>
    </div>
  );
}
