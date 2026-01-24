export const LANDING = '/';
export const PROJETO_MUSEU = '/projetoMuseu';
export const DIVINAS_AXILAS = '/divinasAxilas';
export const SOBRE = '/sobre';
export const ACERVO = '/acervo';
export const SAMBA = '/samba';
export const CAMISETA = '/camiseta';
export const DESFILE = '/desfile';
export const SUVACO_NA_MIDIA = '/suvacoNaMidia';
export const LINHA_DO_TEMPO = '/linhadotempo'
export const EM_CONSTRUCAO = '/ec'



const tipos = ["samba", "midia", "desfile", "camiseta"];

const routes = {};
const subroutes = {};

for (let ano = 1986; ano <= 2025; ano++) {
  // rota principal
  routes[`PAG${ano}`] = `/${ano}`;

  // subrotas
  for (const tipo of tipos) {
    subroutes[`PAG${ano}${tipo.toUpperCase()}`] = `/${ano}/${tipo}`;
  }
}



export default routes;

export { subroutes };
