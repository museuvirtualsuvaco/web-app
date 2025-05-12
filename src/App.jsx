import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/header/Header'
import Sobre from './components/Home/Sobre'
import Projeto from './components/Home/Projeto';
import Acervo from './components/Home/Acervo'
import LinhaDoTempo from './components/Home/LinhaDoTempo'
import DivinasAxilas from './components/Home/DivinasAxilas'
import VoceComSuvaco from './components/Home/VoceComSuvaco'
import Footer from './layouts/footer/Footer'

import EmBreve from './components/pasteEmBreve/EmBreve';

import PageAcervo from './components/pasteAcervo/PageAcervo';
import PageSobre from './components/pasteSobre/PageSobre'
import PageTimeline from './components/pasteTimeline/PageTimeline';
import PageDivinas from './components/pasteDivinasAxilas/PageDivinas';
import PageVoceSuvaco from './components/pasteVoceComSuvaco/PageVoceSuvaco';
import PageEquipe from './components/pasteEquipe/PageEquipe';
import DisclaimerModal from './components/Home/DisclaimerModal';


import PageJoao from './components/pasteArtistas/Joao/PageJoao'
import PageLavigne from './components/pasteArtistas/Lavigne/PageLavigne'
import PagePirulito from './components/pasteArtistas/Pirulito/PagePirulito';


import Ano1986 from './components/pasteTimeline/anos/1986/Ano1986';

import sectionsPosts from './components/json/sections.json'

function App() {

  return (
    <div>
      <Header />
      <Routes>

        {/* Página principal */}
        <Route path="/" element={
          <>
            {/* Criação de cada section post baseado no arquivo json*/}
            <DisclaimerModal></DisclaimerModal>
            <Projeto/>
            <Sobre {...sectionsPosts.sections[1]} />
            <Acervo {...sectionsPosts.sections[2]} />
            <LinhaDoTempo {...sectionsPosts.sections[3]} />
            <DivinasAxilas {...sectionsPosts.sections[4]} />
            <VoceComSuvaco {...sectionsPosts.sections[5]} />
          </>
        }
        />

        {/* Outras páginas*/}
        <Route path="/sobre" element={<PageSobre  {...sectionsPosts.sections[1]} />} />
        <Route path="/timeline" element={<PageTimeline {...sectionsPosts.sections[3]} />} />
        <Route path="/acervo" element={<PageAcervo {...sectionsPosts.sections[2]} />} />
        <Route path="/divinas" element={<EmBreve></EmBreve>} />

        <Route path="/voce-com-o-suvaco" element={<EmBreve></EmBreve>} />

        <Route path="/Ano1986" element={<Ano1986 />} />

        <Route path="/Joao" element={<PageJoao/>} />
        <Route path="/Lavigne" element={<PageLavigne/>} />
        <Route path="/Pirulito" element={<PagePirulito/>} />
        
        <Route path="/projeto" element={<PageEquipe/>} />
        
        <Route path="/breve" element={<EmBreve/>} />

        




      </Routes>

      <Footer />
    </div>
  )
}

export default App
