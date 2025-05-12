import React from "react";
import { rightRender, imgRender } from "../functions";

function Acervo(props){
   
    

    return (
        <section>
            <div className="section-container">
                {rightRender(props.title,props.subtitle,props.right)}
                    <p>{props.text}</p>

                {imgRender(props.img,props.id)}
                
                <div className="footer-section">
                    <a href="/acervo" id="link-txt">{props.link}</a>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default Acervo;