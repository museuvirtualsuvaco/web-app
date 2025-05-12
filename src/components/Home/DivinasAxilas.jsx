import React from "react";
import { rightRender, imgRender } from "../functions";

function DivinasAxilas(props){
   

    return (
        <section>
            <div className="section-container">
                {rightRender(props.title,props.subtitle,props.right)}
                <div className="paragraph">
                    <p>{props.text}</p>
                </div>

                {imgRender(props.img, props.id)}
                
                <div className="footer-section">
                    <a href="/divinas" id="link-txt">{props.link}</a>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default DivinasAxilas;