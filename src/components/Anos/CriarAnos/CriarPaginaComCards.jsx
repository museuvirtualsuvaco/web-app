import styles from "./CriarAnos.module.css"


import CriarCabecalhoAnos from "./CriarCabeçalhoAnos/CriarCabecalhoAnos"
import CriarCardsAnos from './CriarCardAnos/CriarCardAnos'

import group28 from "../../../assets/Group 28.svg"


import { constantsAnosData } from "../../../constants/criarAnos/constantsAnos.data"
import { constantsCardsData } from "../../../constants/criarAnos/constantsCards.data"


export default function CriarPaginaComCards({identificador}) {
  
  {/* Seria bom mudar o nome de "ano" para identificador futuramente.*/ }
  const data = constantsAnosData.find(item => item.ano === identificador)
  const cardsData = constantsCardsData.find(item => item.ano === identificador)

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

        <CriarCardsAnos ano = {identificador} cardsData={cardsData.cards}> </CriarCardsAnos>

      </div>
    
    </>



  )
}