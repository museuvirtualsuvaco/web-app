
import styles from "./GridVisual.module.css"

function GridVisual({titulo, imagens}) {
    console.log(imagens[1]);

    return (
            
            <section className={styles.fotosSection}>

                <h3 className={styles.sectionTitle}> {titulo} </h3>

                <div className={styles.gridVisual}>
                    {/* <img src={divinas3} className={styles.imgBox} alt="" />
                    <img src={divinas2} className={styles.imgBox} alt="" />
                    <img src={divinas1} className={styles.imgBox} alt="" />
                    <img src={divinas4} />
                     */}
                    {imagens.map((p, index) => (
                              <img key={index} src={p} className={styles.imgBox} alt=""/>
                    ))}
                    
                </div>
            </section>
            
      );
}

export default GridVisual;