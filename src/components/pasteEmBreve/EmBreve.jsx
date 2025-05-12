import './EmBreve.css'
import React from "react";
import { Link } from "react-router-dom";
import Voltar from '../Voltar/Voltar';

function EmBreve(){
    return <section>
        
        <div className="section-container">
            <p id="breve">Poxa, infelizmente a página que você solicitou ainda está sendo desenvolvida pela nossa equipe. <br /><br />Fique de olho e tente novamente no futuro!</p>

            <Voltar></Voltar>
        </div>

         
    </section>
    
    
}

export default EmBreve;