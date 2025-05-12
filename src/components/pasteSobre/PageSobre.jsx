import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageSobre.css'
import { Link } from "react-router-dom";

function PageSobre(props){
    return(
    <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title, props.subtitle)}
            <main>
            <p>
                Tudo começou no Posto Nove, como diz o samba de 2001 “A Odisseia do Suvaco” de Chacal , Barreto e Nanico. 
                Em 16 de novembro de 1985, o Jornal do Brasil em matéria de Joaquim Ferreira, noticiava uma confusão 
                protagonizada pelo músico e compositor Jards Macalé ao saber que Jânio Quadros havia vencido as eleições 
                para a prefeitura de São Paulo.  Até hoje não se sabe  a relação entre o “quiprocó” com a decisão de criar 
                um bloco. O fato é que uma galera da Maria Angélica 741, no Jardim Botânico, como o próprio Macalé, 
                o poeta Xico Chaves, o ator e diretor José Lavigne, o médico João Avelleira, o sociólogo Arnaldo Chaim, 
                a produtora cultural Sylvinha Gardenberg e outros amigos, fundaram um bloco.
            </p>
            <p>
                O ano era 1985, quando o país aos poucos retornava à normalidade democrática, e aos poucos alguns novos blocos 
                retomavam as ruas. O Suvaco, entretanto, não tinha suas raízes profundamente ligadas aos movimentos políticos partidários 
                e nem mesmo ao samba. Era um bloco com forte influência do anárquico Charme da Simpatia, surgido no período de ditadura militar 
                e originário do coletivo Nuvem Cigana, e do carnaval de Olinda, onde parte dos foliões passava o carnaval e de onde viriam 
                compositores de sambas inesquecíveis como Lenine e Bráulio Tavares. O que encantava a turma no carnaval era a ode ao prazer. 
                A festa libertária, tolerante, transgressora. A ironia começava no próprio nome, que teve como padrinho involuntário o ilustre 
                morador Tom Jobim, quando em uma entrevista reclamou do mofo devido a umidade do bairro, dizendo morar no Suvaco do Cristo.
                Obviamente, o nome rendeu alguns perrengues com a Cúria, mas aos poucos o bloco foi abraçado pelos moradores do bairro 
                e o nome se tornou parte da cultura popular.       
            </p>
            <p>
                O Suvaco do Cristo agora caminha para seus 40 carnavais, quando termina sua incrível odisseia, deixando como legado a certeza 
                que contribuiu fortemente para o retorno do carnaval de rua no Rio de Janeiro.
            </p>
            <p>
                Evoé meu povo.  
            </p>
        </main>

        <div className="footer-section">
            <Link id="link-txt" to="/" onClick={() => window.scrollTo(0, 0)}>VOLTAR</Link>

                        <div className="line"></div>       
            </div>
        </div>

        



    </section>)
}

export default PageSobre;