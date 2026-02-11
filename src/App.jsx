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

import Artista from './pages/Artista/Artista';

import Timeline from './components/TimelinePage/TimeLine';

import Emconstrucao from './pages/EmBreve/Emconstrucao';
import Erro from './pages/EmBreve/Erro';

import FirebaseUi from './components/FirebaseUi/FirebaseUi';

{/* criacao de suvacodocristo.com/{ANO} */}

import CriarAnos from './components/Anos/CriarAnos/CriarAnos';

import * as ROUTES from './constants/routes';
import routes, { subroutes } from './constants/routes';

{/* criacao de suvacodocristo.com/{ANO}/{SUBROTAS} */}

import CamisetaBase from './components/Anos/SubRotasAnos/CamisetaContent/CamisetaBase';
import SambaBase from './components/Anos/SubRotasAnos/SambaContent/SambaBase';
import MidiaBase from './components/Anos/SubRotasAnos/MidiaContent/MidiaBase';
import DesfileBase from './components/Anos/SubRotasAnos/DesfileContent/DesfileBase'

import DisclaimerModal from './components/disclaimer/disclaimerModal';

function App() {

  return (
    <Router>
      <div>
        <DisclaimerModal></DisclaimerModal>
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
          


          <Route path={routes.PAG1986} element={<CriarAnos ano = "1986"/>} />
          <Route path={routes.PAG1987} element={<CriarAnos ano = "1987"/>} />
          <Route path={routes.PAG1992} element={<CriarAnos ano = "1992"/>} />
          <Route path={routes.PAG2012} element={<CriarAnos ano = "2012"/>} />

    

         <Route path={subroutes.PAG1986CAMISETA} element ={<CamisetaBase ano = "1986"/>} />
         <Route path={subroutes.PAG1987CAMISETA} element ={<CamisetaBase ano = "1987"/>} />
         <Route path={subroutes.PAG1992CAMISETA} element ={<CamisetaBase ano = "1992"/>} />
         <Route path={subroutes.PAG2012CAMISETA} element ={<CamisetaBase ano = "2012"/>} />
         
         


         <Route path={subroutes.PAG1986SAMBA} element ={<SambaBase ano = "1986"/>} />
         <Route path={subroutes.PAG1987SAMBA} element ={<SambaBase ano = "1987"/>} />
         <Route path={subroutes.PAG1992SAMBA} element ={<SambaBase ano = "1992"/>} />
         <Route path={subroutes.PAG2012SAMBA} element ={<SambaBase ano = "2012"/>} />



         <Route path={subroutes.PAG1986MIDIA} element ={<MidiaBase ano = "1986"/>} />
         <Route path={subroutes.PAG1987MIDIA} element ={<MidiaBase ano = "1987"/>} />
         <Route path={subroutes.PAG1992MIDIA} element ={<MidiaBase ano = "1992"/>} />
         <Route path={subroutes.PAG2012MIDIA} element ={<MidiaBase ano = "2012"/>} />



         <Route path={subroutes.PAG1986DESFILE} element ={<DesfileBase ano = "1986"/>} />
         <Route path={subroutes.PAG1987DESFILE} element ={<DesfileBase ano = "1987"/>} />
         <Route path={subroutes.PAG1992DESFILE} element ={<DesfileBase ano = "1992"/>} />
         <Route path={subroutes.PAG2012DESFILE} element ={<DesfileBase ano = "2012"/>} />


          
        
          <Route path={routes.PAG1988} element={<Emconstrucao />} />
          <Route path={routes.PAG1989} element={<Emconstrucao />} />
          <Route path={routes.PAG1990} element={<Emconstrucao />} />
          <Route path={routes.PAG1991} element={<Emconstrucao />} />
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

          <Route path="/artista/:personId" element={<Artista />} />


          
        
          

          
          <Route path={ROUTES.EM_CONSTRUCAO} element={<Emconstrucao />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
