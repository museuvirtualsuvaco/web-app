import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Voltar(){
    
    const navigate = useNavigate();
    
    return(
        <>
         <div className="footer-section">
                    <button
                        id="link-txt"
                        onClick={() => {
                            navigate(-1);
                            window.scrollTo(0, 0);
                        }}
                    >
                        VOLTAR
                    </button>
                    <div className="line"></div>
                </div>
        </>
    )
}

export default Voltar;