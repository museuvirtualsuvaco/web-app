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

import Timeline from './components/TimelinePage/TimeLine';

import Emconstrucao from './pages/EmBreve/Emconstrucao';
import Erro from './pages/EmBreve/Erro';

import FirebaseUi from './components/FirebaseUi/FirebaseUi';
import Ano1986 from './components/Anos/1986/ano1986';
import Ano2012 from './components/Anos/2012/ano2012';

import * as ROUTES from './constants/routes';
import routes, { subroutes } from './constants/routes';

import Samba1986 from './components/SubConteudo/1986/Samba1986';
import Camiseta1986 from './components/SubConteudo/1986/Camiseta1986';
import SuvacoMidia86 from './components/SubConteudo/1986/SuvacoMidia1986';
import Desfile86 from './components/SubConteudo/1986/Desfile1986'


import Samba2012 from './components/SubConteudo/2012/Samba2012';
import Camiseta2012 from './components/SubConteudo/2012/Camiseta2012';
import SuvacoMidia2012 from './components/SubConteudo/2012/SuvacoMidia2012';
import Desfile2012 from './components/SubConteudo/2012/Desfile2012'

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Header/>

        <hr />
        <Routes>

          <Route path="*" element={<Erro></Erro>} />

          <Route path={ROUTES.LANDING} element={<Home />} />
          <Route path={ROUTES.DIVINAS_AXILAS} element={<DivinasAxilas />} />
          <Route path={ROUTES.PROJETO_MUSEU} element={<ProjetoMuseu />} />
          <Route path={ROUTES.LINHA_DO_TEMPO} element={<Timeline/>} />
          <Route path={ROUTES.FIREBASE_TESTING} element={<FirebaseUi/>} />
          
          
          <Route path={routes.PAG1986} element={<Ano1986/>} />
          <Route path={subroutes.PAG1986SAMBA} element={<Samba1986/>} />
          <Route path={subroutes.PAG1986MIDIA} element={<SuvacoMidia86/>} />
          <Route path={subroutes.PAG1986DESFILE} element={<Desfile86/>} />
          <Route path={subroutes.PAG1986CAMISETA} element={<Camiseta1986/>} />


          <Route path={routes.PAG1987} element={<Emconstrucao />} />
          <Route path={routes.PAG1988} element={<Emconstrucao />} />
          <Route path={routes.PAG1989} element={<Emconstrucao />} />
          <Route path={routes.PAG1990} element={<Emconstrucao />} />
          <Route path={routes.PAG1991} element={<Emconstrucao />} />
          <Route path={routes.PAG1992} element={<Emconstrucao />} />
          <Route path={routes.PAG1993} element={<Emconstrucao />} />
          <Route path={routes.PAG1994} element={<Emconstrucao />} />
          <Route path={routes.PAG1995} element={<Emconstrucao />} />
          <Route path={routes.PAG1995} element={<Emconstrucao />} />
          <Route path={routes.PAG1996} element={<Emconstrucao />} />
          <Route path={routes.PAG1997} element={<Emconstrucao />} />
          <Route path={routes.PAG1998} element={<Emconstrucao />} />
          <Route path={routes.PAG1999} element={<Emconstrucao />} />
          <Route path={routes.PAG2000} element={<Emconstrucao />} />
          <Route path={routes.PAG2001} element={<Emconstrucao />} />
          <Route path={routes.PAG2002} element={<Emconstrucao />} />
          <Route path={routes.PAG2003} element={<Emconstrucao />} />
          <Route path={routes.PAG2004} element={<Emconstrucao />} />
          <Route path={routes.PAG2005} element={<Emconstrucao />} />
          <Route path={routes.PAG2006} element={<Emconstrucao />} />
          



          <Route path={routes.PAG2012} element={<Emconstrucao/>} />
          <Route path={subroutes.PAG2012SAMBA} element={<Samba2012/>} />
          <Route path={subroutes.PAG2012MIDIA} element={<SuvacoMidia2012/>} />
          <Route path={subroutes.PAG2012DESFILE} element={<Desfile2012/>} />
          <Route path={subroutes.PAG2012CAMISETA} element={<Camiseta2012/>} />

          

          
          <Route path={ROUTES.EM_CONSTRUCAO} element={<Emconstrucao />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
