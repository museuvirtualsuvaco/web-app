import styles from '../ProjetoMuseu.module.css'
export default function TextBox({ data }) {

    const textsArray = data.texts;

    return (


        <section>
            <h2 className={styles.titleSection}>{data.title}</h2>
            <article className={styles.box}>

                {textsArray.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </article>
        </section>

    )
}