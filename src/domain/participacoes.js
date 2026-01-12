import participacoes from '../constants/participacoes.json'

export function getParticipantes({
  ano,
  categoria,  
  papel       
}) {
  const dadosAno = participacoes[ano]
  if (!dadosAno) return []

  const bloco = dadosAno[categoria]
  if (!bloco) return []

  
  if (Array.isArray(bloco)) {
    return bloco
  }

  if (papel && Array.isArray(bloco[papel])) {
    return bloco[papel]
  }

  return []
}
