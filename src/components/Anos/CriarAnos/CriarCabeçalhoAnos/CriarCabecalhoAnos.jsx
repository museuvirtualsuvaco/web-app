import { getPhoto } from '../../../../hooks/getPhoto'
import styles from '../criarAnos.module.css'

export default function CriarCabecalhoAnos({ data }) {
  return (
    <>
      <div className={styles.cabecalho}>
        <h2 className={styles.title}> Desfile {data.ano}</h2>
      </div>

      {/*Atualizar com banco de dados
      
      Falta criar a lógica pra pegar esse arquivo
      */}
      <img className={styles.floatImage} src={getPhoto(data.ano,data.fotoCabecalho)} alt="" />
    
      <section className={styles.sectionTexts}>
        {data.textoCabecalho.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </section>
    </>
  )
}