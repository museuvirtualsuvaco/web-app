import pessoas from '../constants/pessoasArtistas.json'

export function getPessoa(personId) {
  return pessoas[personId] || null
}
