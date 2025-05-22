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

import Ano1986 from './components/Anos/1986/ano1986';

import * as ROUTES from './constants/routes';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Header></Header>

        <hr />
        <Routes>

          <Route path={ROUTES.LANDING} element={<Home />} />
          <Route path={ROUTES.DIVINAS_AXILAS} element={<DivinasAxilas />} />
          <Route path={ROUTES.PROJETO_MUSEU} element={<ProjetoMuseu />} />
          <Route path={ROUTES.SOBRE} element={<Sobre/>} />
          <Route path={ROUTES.TEMPORARIO} element={<Ano1986/>} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
