import React from "react";
import { Link } from "react-router-dom";
import styles from '../SambaContent/Samba.module.css'



const importImagem = (fileName) =>
    new URL(`../../../../assets/artistas/${fileName}`, import.meta.url).href;

export default function AutoresCarrossel({ ids, pessoas }) {
    function scroll(direcao) {
        const container = document.getElementById("carrossel");
        const item = container?.querySelector("[data-item]");
        if (!item) return;

        const style = window.getComputedStyle(item);
        const width = item.offsetWidth + parseInt(style.marginRight || 0);

        container.scrollBy({
            left: direcao * width,
            behavior: "smooth",
        });
    }

    return (
        <>
            <h2 className={styles.sectionTitle}>AUTORES</h2>
            <section className={styles.card}>
                <div className={styles.carrosselWrapper}>
                    <button
                        className={`${styles.seta} ${styles.esquerda}`}
                        onClick={() => scroll(-1)}
                    >
                        &#10094;
                    </button>

                    <div className={styles.carrossel} id="carrossel">
                        {ids.map((id) => {
                            const autor = pessoas[id];
                            if (!autor) return null;

                            return (
                                <div key={id} className={styles.profile} data-item>
                                    <Link to={`/artista/${id}`}>
                                        <img
                                            className={styles.avatar}
                                            src={importImagem(autor.imgFile)}
                                            alt={autor.name}
                                        />
                                        <span className={styles.nome}>{autor.name}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className={`${styles.seta} ${styles.direita}`}
                        onClick={() => scroll(1)}
                    >
                        &#10095;
                    </button>
                </div>
            </section>
        </>
    );
}