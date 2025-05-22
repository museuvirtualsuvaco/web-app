import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage';
import ProjetoMuseu from './components/ProjetoMuseu/ProjetoMuseu';
import DivinasAxilas from './components/DivinasAxilas/DivinasAxilas';
import Sobre from './components/Sobre/Sobre';

import FirebaseUi from './components/FirebaseUi/FirebaseUi';

import * as ROUTES from './constants/routes';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <hr />
        <Routes>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.DIVINAS_AXILAS} element={<DivinasAxilas />} />
          <Route path={ROUTES.PROJETO_MUSEU} element={<ProjetoMuseu />} />
          <Route path={ROUTES.SOBRE} element={<Sobre/>} />
          <Route path={ROUTES.FIREBASE_TESTING} element={<FirebaseUi/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
