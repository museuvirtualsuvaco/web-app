import AnoItem from "./AnoItem";
import styles from '../FormCarrossel.module.css'

export default function AnoCarrossel({
    anos,
    carrosselRef,
    onAnoClick,
    onScrollLeft,
    onScrollRight,
}) {
    return (
        <div className={styles.carrosselWrapper}>
            <button type="button" className={`${styles.seta} ${styles.esquerda}`} onClick={onScrollLeft}>
                &#10094;
            </button>

            <div className={styles.carrossel} ref={carrosselRef}>
                {anos.map((item) => (
                    <AnoItem
                        key={item.nome}
                        ano={item.nome}
                        src={item.src}
                        disabled={item.disabled}
                        onClick={() => onAnoClick(item)}
                    />
                ))}
            </div>

            <button type="button" className={`${styles.seta} ${styles.direita}`} onClick={onScrollRight}>
                &#10095;
            </button>
        </div>
    );
}