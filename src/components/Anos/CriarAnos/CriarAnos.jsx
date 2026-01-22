import styles from "./criarAnos.module.css"


import CriarCabecalhoAnos from "./CriarCabeçalhoAnos/criarCabecalhoAnos"
import CriarCardsAnos from "./CriarCardsAnos/CriarCardsAnos"

import group28 from "../../../assets/group 28.svg"


import { constantsAnosData } from "../../../constants/criarAnos/constantsAnos.data"
import { constantsCardsData } from "../../../constants/criarAnos/constantsCards.data"


{/* como não estamos usando typescript, atenção pro ano que deve ser uma string*/ }

export default function CriarAnos({ ano }) {

  const data = constantsAnosData.find(item => item.ano === ano)
  const cardsData = constantsCardsData.find(item => item.ano === ano)

  if (!data || !cardsData) return null


  return (

    <>

      {/*como estamos sem banco de dados, falta criar a requisicao pra
      pegar as fotos respectivas de cada ano e passar pro <CriarCabecalhosAnos>
      
      
      
      A mesma coisa se aplica aos cards.
      
      */}
      <CriarCabecalhoAnos data={data} />


      <div className={styles.sectionCards}>

        <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />

        <CriarCardsAnos cardsData={cardsData.cards}> </CriarCardsAnos>

      </div>
    
    </>



  )
}
