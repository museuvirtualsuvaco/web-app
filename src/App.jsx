import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ProjetoMuseu from './components/ProjetoMuseu/ProjetoMuseu';
import DivinasAxilas from './components/DivinasAxilas/DivinasAxilas';
import Sobre from './components/Sobre/Sobre';
import SubPagina from './pages/SubPagina/SubPagina';
import Artista from './pages/Artista/Artista';

import FirebaseUi from './components/FirebaseUi/FirebaseUi';
import Ano1986 from './components/Anos/1986/ano1986';

import * as ROUTES from './constants/routes';

// Importação dos componentes de cada ano e categoria
import Samba1986 from './components/SubConteudo/1986/Samba1986';
import Camiseta1986 from './components/SubConteudo/1986/Camiseta1986';
import SuvacoMidia86 from './components/SubConteudo/1986/SuvacoMidia1986';
import Desfile86 from './components/SubConteudo/1986/Desfile1986'

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Header/>

        <hr />
        <Routes>

          <Route path={ROUTES.LANDING} element={<Home />} />
          <Route path={ROUTES.DIVINAS_AXILAS} element={<DivinasAxilas />} />
          <Route path={ROUTES.PROJETO_MUSEU} element={<ProjetoMuseu />} />
          <Route path={ROUTES.SOBRE} element={<Sobre/>} />
          <Route path={ROUTES.FIREBASE_TESTING} element={<FirebaseUi/>} />
          <Route path={ROUTES.PAG86} element={<Ano1986/>} />
          <Route path={ROUTES.ARTISTA} element={<Artista />} />
          
          <Route path={ROUTES.PAG86SAMBA} element={<Samba1986/>} />
          <Route path={ROUTES.PAG86MIDIA} element={<SuvacoMidia86/>} />
          <Route path={ROUTES.PAG86DESFILE} element={<Desfile86/>} />
          <Route path={ROUTES.PAG86CAMISETA} element={<Camiseta1986/>} />

          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
