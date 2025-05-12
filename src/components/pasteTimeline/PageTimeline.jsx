import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageTimeline.css'
import { Link } from "react-router-dom";
import { placeImageFromSheetByID } from "../functions";
import DATA from "../json/resultado_formatado.json"

function PageTimeline(props){
    return <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title,props.subtitle,"title-linha-tempo")}
        
            <div className= "section-pages">
                
                <Link to="/Ano1986" className="img-container container-scale">
                    {placeImageFromSheetByID(10, DATA, "img-timeline")}
                    <h3>Desfile 01 - Ano 1986</h3>
                </Link>
                
                <Link to="#" className="img-container container-scale">
                    <img className="img=timeline" src="img/427422_371090806252584_1535985756_n.jpg" alt="" />
                    <h3>Desfile 27 - Ano 2012 <br/> EM BREVE</h3>
                </Link>
                
            </div>
            <div className="footer-section">
                <Link id="link-txt" to="/" onClick={() => window.scrollTo(0, 0)}>VOLTAR</Link>

                                <div className="line"></div>
                    </div>
        </div>
                    
    </section>
}

export default PageTimeline