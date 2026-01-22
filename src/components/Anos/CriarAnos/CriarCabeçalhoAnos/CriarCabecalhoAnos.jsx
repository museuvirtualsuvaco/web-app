import styles from '../criarAnos.module.css'
import foto from '../../../../assets/1986 desfile.JPG'

export default function CriarCabecalhoAnos({ data }) {
  return (
    <>
      <div className={styles.cabecalho}>
        <h2 className={styles.title}> Desfile {data.ano}</h2>
      </div>

      {/*Atualizar com banco de dados
      
      Falta criar a lógica pra pegar esse arquivo
      */}
      <img className={styles.floatImage} src={foto} alt="" />
    
      <section className={styles.sectionTexts}>
        {data.textoCabecalho.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </section>
    </>
  )
}
