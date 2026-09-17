import styles from "./CriarAnos.module.css"


import CriarCabecalhoAnos from "./CriarCabeçalhoAnos/CriarCabecalhoAnos"
import CriarCardsAnos from './CriarCardAnos/CriarCardAnos'

import group28 from "../../../assets/Group 28.svg"


import { constantsAnosData } from "../../../constants/criarAnos/constantsAnos.data"
import { constantsCardsData } from "../../../constants/criarAnos/constantsCards.data"
import CriarPaginaComCards from "./CriarPaginaComCards"


{/* como não estamos usando typescript, atenção pro ano que deve ser uma string*/ }

export default function CriarAnos({ ano }) {
  if (typeof ano !== 'string' || isNaN(ano) || !isFinite(ano)) 
    console.error("O valor do ano passado para criar a página do ano não é uma string contendo apenas o número.");

  return(
     <CriarPaginaComCards identificador={ano}/>
  );
  // const data = constantsAnosData.find(item => item.ano === ano)
  // const cardsData = constantsCardsData.find(item => item.ano === ano)

  // if (!data || !cardsData) return null


  // return (

  //   <>

  //     {/*como estamos sem banco de dados, falta criar a requisicao pra
  //     pegar as fotos respectivas de cada ano e passar pro <CriarCabecalhosAnos>
      
      
      
  //     A mesma coisa se aplica aos cards.
      
  //     */}
  //     <CriarCabecalhoAnos data={data} />


  //     <div className={styles.sectionCards}>

  //       <img src={group28} className={styles.group28Gradiente} alt="divisor ondulado" />

  //       <CriarCardsAnos ano = {ano} cardsData={cardsData.cards}> </CriarCardsAnos>

  //     </div>
    
  //   </>
  //)
}