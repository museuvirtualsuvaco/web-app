import { useState, useEffect } from "react";
import './DisclaimerModal.css'

const DisclaimerModal = () => {
    const [accepted, setAccepted] = useState(() => {
        return localStorage.getItem("disclaimerAccepted") === "true";
    });

    const handleAccept = () => {
        localStorage.setItem("disclaimerAccepted", "true");
        setAccepted(true);
    };

    return (
        <>
            {!accepted && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className=""></h2>
                        <p >
                            Caros amigos suvaquenses, este site está sendo produzido com muito amor (e suor) para disponibilizar amplamente nossa história.
                        </p>
                        <p>
                            A versão que temos aqui ainda é um protótipo. Ainda há muito a completar e, eventualmente, a corrigir.</p>
                            
                        <p> 
                            O caminho para a disponibilização dos 40 anos do bloco será longo… Gostaríamos de dar os créditos a
                            todos os músicos, artistas, fotógrafos, jornalistas, mas nem sempre temos a informação completa.
                            Então, solicitamos que entrem em contato conosco através do e-mail 
                            <a className="mail-modal" href="mailto:museuvirtualsuvaco@gmail.com"> museuvirtualsuvaco@gmail.com </a> 
                            caso percebam incorreções ou outras falhas a serem corrigidas.
                        </p>

                        <p>Prometemos analisar com carinho!</p>
                        
                        <p>Por enquanto, um ótimo 39º desfile para todos!</p>
                        <button
                            onClick={handleAccept}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DisclaimerModal;
