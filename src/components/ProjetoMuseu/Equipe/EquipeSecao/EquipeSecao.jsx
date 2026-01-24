import styles from '../../ProjetoMuseu.module.css'
import EquipeMembro from '../EquipeMembro/EquipeMembro'
import { membros } from '../../../../constants/ProjetoMuseu/membros.data'

export default function EquipeSecao({ title, membrosIds }) {
    
    
    return (
        <>
            <h2 className={styles.titleSectionEquipe}>{title}</h2>

            <div className={styles.box}>
                <div className={styles.divFotos}>
                    {membrosIds.map((id) => (
                        <EquipeMembro key={id} membro={membros[id]} />
                    ))}
                </div>
            </div>
        </>
    )
}
