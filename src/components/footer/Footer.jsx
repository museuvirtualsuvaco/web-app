import React from "react";
import './footer.css'

export default function Footer() {

    return <footer>
        
        <div className="texts-left-footer">
            <p id="bold">Suvaco do Cristo</p>
            <p>Todos os direitos reservados.</p>
        </div>
        <div className="links">

            <a href="https://www.instagram.com/suvacodocristooficial" target="_blank" rel="noopener noreferrer">
                <i class="ri-instagram-line"></i><span> Instagram</span>
            </a>
            <a href="https://www.youtube.com/@blocosuvacodecristorj" target="_blank" rel="noopener noreferrer">
                <i class="ri-youtube-line"></i><span> Youtube</span>
            </a>
            <a href="https://www.facebook.com/suvaco.docristo" target="_blank" rel="noopener noreferrer">
                <i class="ri-facebook-box-line"></i><span> Facebook</span>
            </a>
        </div>

    </footer>
}