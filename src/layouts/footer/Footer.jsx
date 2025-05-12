import React from "react";
import './footer.css'

function Footer(){

    return(
        <footer>
            <div className="grid">
                
                <div className="flex">
                    <p>Suvaco do Cristo. <br />Todos os direitos reservados.</p>
                    <div className="socials">
                        <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                            <i className="ri-instagram-line"></i>
                                <span> Instagram</span>
                        </a>
                        <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                            <i className="ri-youtube-line"></i>
                                <span> Youtube</span>
                        </a>
                        <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                            <i className="ri-facebook-box-line"></i>
                                <span> Facebook</span>
                        </a>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;