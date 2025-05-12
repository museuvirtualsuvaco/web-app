import React, { useState } from "react";
import './Carrossel.css';

const Carrossel = ({ artistas }) => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const totalArtistas = artistas.length;
    const artistasVisiveis = artistas.slice(indiceAtual, indiceAtual + 3);

    const avancar = () => {
        if (indiceAtual + 3 < totalArtistas) {
            setIndiceAtual(indiceAtual + 3);
        }
    };

    const voltar = () => {
        if (indiceAtual - 3 >= 0) {
            setIndiceAtual(indiceAtual - 3);
        }
    };

    return (
        <>
        <div className="flex-carrossel" style={{ marginTop: "35px" }}>
            {totalArtistas > 3 && <i className="ri-arrow-left-line arrow display-desktop" onClick={voltar}></i>}
            
            {artistasVisiveis.map((artista, index) => (
                <div className={totalArtistas < 2 ? `artista-${index}` : "artista"} key={index}>
                    <span id="artista-funcao">{artista.funcao}</span>
                    
                    <a href={artista.link}>
                        <img 
                        className="img-artista" 
                        src={artista.imagem} 
                        alt={artista.nome} 
                        />
                    </a>
                    
                    <span id="artista-name">{artista.nome}</span>
                </div>
            ))}
            {totalArtistas > 3 && <i className="ri-arrow-right-line arrow display-desktop" onClick={avancar}></i>}

            

        </div>

        {totalArtistas > 3 && (
                <div className="arrow-container">
                    <i className="ri-arrow-left-line arrow display-celular" onClick={voltar}></i>
                    <i className="ri-arrow-right-line arrow display-celular" onClick={avancar}></i>
                </div>
            )}
            </>
    );
};

export default Carrossel;
