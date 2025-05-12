import React from "react";

import { rightRender, imgRender } from "../functions";
import { Link } from "react-router-dom";

function LinhaDoTempo(props){
     
    return (
        <section>
            <div className="section-container">
                {rightRender(props.title,props.subtitle, props.right)}
                <div className="paragraph">
                    <p>{props.text}</p>
                </div>

                {imgRender(props.img, props.id)}
                
                <div className="footer-section">
                    <Link to="/timeline" id="link-txt">{props.link}</Link>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default LinhaDoTempo;