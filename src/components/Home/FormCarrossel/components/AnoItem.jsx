import styles from '../FormCarrossel.module.css'

export default function AnoItem({
    ano,
    src,
    disabled,
    onClick,
}) {
    return (
        <button
            type="button"
            data-item
            className={`${styles.item} ${disabled ? styles.disabled : ""}`}
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
        >
            <img src={src} alt={`Ano ${ano}`} />
        </button>
    );
}