import styles from "./CriarCardsAxilas.module.css";

export default function CriarCardsAxilas({ cardsData }) {
  return (
    <>
      {cardsData.map((card, index) => {
        const gradient = `linear-gradient(180deg, ${card.firstColor}, ${card.secondColor})`;
        const isBook = card.title.toLowerCase() === "book";

        return (
          <a
            href={isBook ? "bookpdf.pdf" : card.link}
            download={isBook ? "bookpdf.pdf" : undefined}
          >
            <div className={styles.cardInfo} style={{ background: gradient }}>
              <div className={styles.textsFlex}>
                <h2
                  className={`${styles.title} ${index === 0 ? styles.firstTitle : ""}`}
                >
                  {card.title}
                </h2>

                <p className={styles.p}>{card.description}</p>

                <button className={styles.button}>
                  Clique para ver mais!{" "}
                  <i className="ri-arrow-right-circle-line" />
                </button>
              </div>

              <img src={card.src} alt={card.title} className={styles.imgCard} />
            </div>
          </a>
        );
      })}

      <div className={styles.spacer} />
    </>
  );
}
