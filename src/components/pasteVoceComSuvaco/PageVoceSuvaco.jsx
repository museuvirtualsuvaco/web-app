import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageVoceSuvaco.css'

function PageVoceSuvaco(props){
    
    return(
        <section>
            <div className="section-container">
                {renderTitleSubtitle(props.title, props.subtitle)}

                <span id="warning">EM DESENVOLVIMENTO</span>
            </div>
            </section>
    )


}

export default PageVoceSuvaco