import React from "react";
import { Link } from "react-router-dom";
import { rightRender, imgRender } from "../functions";

function Sobre(props) {
    return (
        <section>
            <div className="section-container">
                {rightRender(props.title, props.subtitle, props.right)}
                <div className="paragraph">
                    {props.text && props.text.map((paragraph, index) => (
                        <><p key={index}>{paragraph}</p><br/></>
                    ))}
                </div>
                
                <div className="footer-section">
                    <Link to="/sobre" id="link-txt">{props.link}</Link>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
