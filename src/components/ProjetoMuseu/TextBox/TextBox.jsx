import styles from '../ProjetoMuseu.module.css'

export default function TextBox({ data }) {
  const textsArray = data.texts;

  return (
    <section>
      <h2 className={styles.titleSection}>{data.title}</h2>

      <article className={styles.box}>
        {textsArray.map((item, index) => {

          // caso texto normal
          if (typeof item === "string") {
            return <p key={index}>{item}</p>;
          }

          // caso link (midia)
          return (
            <p className={styles.links} key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            </p>
          );
        })}
      </article>
    </section>
  );
}
