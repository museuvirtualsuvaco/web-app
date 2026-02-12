import styles from '../ProjetoMuseu.module.css'
import { equipeData } from '../../../constants/ProjetoMuseu/equipe.data'
import EquipeSecao from './EquipeSecao/EquipeSecao'

export default function Equipe() {
    return (
        <section>
            <h2 className={styles.titleSection}>EQUIPE</h2>

            <div className={styles.box}>
                <p>
                    Esse projeto foi desenvolvido em uma colaboração entre o Instituto de
                    Computação da UFRJ, a Escola de Belas Artes da UFRJ e parceiros do
                    Bloco Suvaco do Cristo.
                </p>
            </div>

            {Object.entries(equipeData).map(([key, secao]) => (
                <EquipeSecao
                    key={key}
                    title={secao.title}
                    membrosIds={secao.membros}
                />
            ))}
        </section>
    )
}