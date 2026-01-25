import styles from '../FormCarrossel.module.css'

export default function AnoSearchForm({
    value,
    onChange,
    onSubmit,
}) {
    return (

        
        <form className={styles.mainContainer} onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
                <label className={styles.buscarAnos} htmlFor="busca">
                    Buscar anos
                </label>

                <input
                    type="number"
                    id="busca"
                    min="1986"
                    max="2026"
                    placeholder="Ex: 1999"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </form>
    );
}
