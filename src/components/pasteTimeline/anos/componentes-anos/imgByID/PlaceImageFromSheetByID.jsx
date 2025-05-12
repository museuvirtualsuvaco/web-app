/* É literalmente o mesmo código que encontramos dentro da pasta function
Depois podemos refatorar isso aqui
Foi criado as pressas porque estava dando erro ao renderizar as fotos com os hooks*/

/*Usar quando alteramos o estado/hook de alguma coisa, tal qual as box de cada ano
caso contrario, pra coisas fixas, como a pagina timeline
podemos manter com a funcao do function */

import { useState } from "react";
import React from "react";

function PlaceImageFromSheetByID({ id, sheet, objClass = null, ObjID = null }) {
    const image = sheet.find(item => item.id === id);
    
    const [fullScreenActivated, setFullScreenActivated] = useState(false);

    if (!image) {
        console.warn(`Imagem com ID ${id} não encontrada.`);
        return <p>Imagem não encontrada</p>;
    }

    function openFullScreen() {
        setFullScreenActivated(true);
    }

    function closeFullScreen() {
        setFullScreenActivated(false);
    }

    return (
        <>
            <img 
                src={`img/${image.item}`} 
                alt={image.desc || "Imagem"} 
                title={image.desc || "Imagem"} 
                className={objClass || undefined} 
                id={ObjID || undefined}
                onClick={openFullScreen}
            />
            
            {fullScreenActivated && (
                <div className="fullscreen-container">
                    <button className="close-btn" onClick={closeFullScreen}>
                        <i className="ri-close-large-line"></i>
                    </button>
                    <img className="fullscreen" src={`img/${image.item}`} alt={image.desc || "Imagem"} />
                </div>
            )}
        </>
    );
}

export default PlaceImageFromSheetByID;
