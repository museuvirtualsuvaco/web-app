import styles from '../../ProjetoMuseu.module.css'
import EquipeMembro from '../EquipeMembro/EquipeMembro'
import { membros } from '../../../../constants/ProjetoMuseu/membros.data'

export default function EquipeSecao({ title, membrosIds }) {

  // ordena alfabeticamente
  const membrosOrdenados = [...membrosIds].sort((a, b) =>
    a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })
  )

  return (
    <>
      <h2 className={styles.titleSectionEquipe}>{title}</h2>

      <div className={styles.box}>
        <div className={styles.divFotos}>
          {membrosOrdenados.map((id) => (
            <EquipeMembro
              key={id}
              membro={membros[id]}
            />
          ))}
        </div>
      </div>
    </>
  )
}
