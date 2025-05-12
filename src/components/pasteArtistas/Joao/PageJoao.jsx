import React from "react";
import { renderTitleSubtitle } from "../../functions";
import './PageJoao.css'
import Voltar from "../../Voltar/Voltar";
 // Modificação aqui

function PageJoao() {

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("João Avelleira", null)}

                <div className="primeiro-paragrafo">
                    <img id="perfil-artista" src="img/96.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis, eum exercitationem possimus harum officia commodi nesciunt velit totam voluptatibus eveniet enim quos. Sit possimus porro odit totam vel sequi.
                        Iusto, doloribus voluptatibus! Totam vitae odit sed provident esse error aliquid a, vero doloremque illo expedita veniam eaque quisquam ea. Modi magni fuga beatae. Doloribus iure delectus sapiente ad tempora!
                        Esse facere, dicta repellat quam ea nulla accusamus perspiciatis fugiat obcaecati, ad ab placeat. Dolore tempora maiores eveniet voluptas quidem facere. Ducimus officiis quasi illum maiores expedita? Neque, temporibus asperiores?
                        Velit earum quos ipsam inventore! Illo, laboriosam. Tempore labore quisquam ipsa dicta iste quia, aspernatur aperiam illum fugiat aliquam voluptates laboriosam deserunt eligendi repudiandae quo obcaecati, deleniti eos. Quod, error!
                        Expedita non voluptas fugiat molestias inventore cupiditate ab nesciunt accusamus nisi natus, cum eligendi. Repellat voluptate, incidunt architecto praesentium ipsa, accusantium rem corporis eos libero minima neque! Numquam, facilis repellat</p>
                </div>

                <div className="redes-sociais">
                </div>

                <Voltar></Voltar>
            </div>
        </section>

    )
}

export default PageJoao;