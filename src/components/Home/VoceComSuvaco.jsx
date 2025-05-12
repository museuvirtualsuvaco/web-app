import React from "react";
import comments from "../json/comments.json";

function VoceComSuvaco(props) {
    const isRight = props.right === "True"; 

    function rightRender(title, subtitle) {
        if (!isRight) {
            return (
                <div className="section-title-subtitle">
                    <h2 className="not-right">{title}</h2>
                    <h3>{subtitle}</h3>
                    <div className="subtitle-line"></div>
                </div>
            );
        }

        return (
            <div className="section-title-subtitle">
                <h3>{subtitle}</h3>
                <h2 className="right">{title}</h2>
            </div>
        );
    }

    return (
        <section>
            <div className="section-container">
                {rightRender(props.title, props.subtitle)}

                <div className="comments-container">
                    <button id="contribute"><a href="voce-com-o-suvaco">Contribua com suas fotos e seus depoimentos</a></button>

                    {Object.keys(comments).map((key) => {
                        const comment = comments[key];
                        return (
                            <div key={key} className="comment">
                                <i className="ri-user-line"></i>
                                <div className="comment-content">
                                    <p className="NAME-DATE">{comment.name}, {comment.date}</p>
                                    <p>{comment.comment}</p>
                                    <div className="dashed-line"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="footer-section">
                    <a href="voce-com-o-suvaco" id="link-txt">{props.link}</a>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
}

export default VoceComSuvaco;
