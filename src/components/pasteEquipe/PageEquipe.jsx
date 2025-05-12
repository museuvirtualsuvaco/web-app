import React from "react";
import { renderTitleSubtitle } from "../functions";
import { Link } from "react-router-dom";
import './PageEquipe.css'

function PageEquipe() {

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("Museu virtual do carnaval de rua do Rio: Suvaco do  Cristo", "", "h2-equipe")}


                <p className="paragraph-equipe">
                    Qual é o papel de universidades como a UFRJ e da sociedade em geral na  preservação e divulgação da memória do carnaval 
                    de rua do Rio de Janeiro? Essa indagação foi a motivação para a criação do projeto de extensão “Museu virtual do 
                    carnaval de rua do Rio de Janeiro – O bloco Suvaco do Cristo”, um dos responsáveis 
                    pela revitalização do carnaval de rua carioca. Através de uma parceria entre a 
                    presidência do bloco e o Instituto de Computação (IC/UFRJ), nasceu a ideia de 
                    construir um espaço para que essa história seja contada e continuada.

                </p>

                <h3 className="h3-equipe" >Objeto de pesquisa</h3>

                <p className="paragraph-equipe">O bloco Suvaco do Cristo é reconhecido como um dos 
                    responsáveis pela revitalização do carnaval de rua do Rio de Janeiro, desde meados dos anos 1980. 
                    O nome do bloco  surgiu de uma entrevista com o maestro e compositor Tom Jobim, morador do bairro do 
                    Jardim Botânico, em que dizia que o bairro era o “sovaco” do Cristo por causa do mofo  nos armários de sua casa. 
                    O quartel-general do bloco era na rua Maria Angélica, localizada em uma linha reta a partir das axilas da estátua do Cristo Redentor, 
                    no morro do Corcovado. E o nome pegou rápido.  
                </p>

                <p className="paragraph-equipe">Criado por um grupo de artistas e profissionais liberais, 
                    o Suvaco do Cristo nasceu nas areias do Posto Nove, na Praia de Ipanema, e tinha como lema a liberdade, a picardia e a 
                    festa. A proposta era agitar, juntar uma porção de gente amiga e sair por aí se  divertindo. Assim, entre pássaros, 
                    micos e as ruas bucólicas do Jardim Botânico, o Suvaco se tornaria uma referência para o surgimento de inúmeros outros blocos de 
                    bairro no Rio. 
                </p>

                <p className="paragraph-equipe">Ao longo de sua história, sambas antológicos assinados por Lenine, Nanico, Chacal, 
                    Janjão, Gallotti, Casuarina, Mu Chebabi entre outros, desfilaram pelas ruas do bairro da 
                    Zona Sul carioca. A bateria, comandada pelos mestres Felipão e Tião Belo (in  memoriam) é um grande caso de amor entre o 
                    Suvaco e a comunidade Santa Marta, em  Botafogo. Há cerca de vinte anos, a bandeira do bloco desfila nas mãos da apresentadora Cynthia 
                    Howlett. Da relação com a comunidade Santa Marta, surgiu em 2008, a ONG Divinas Axilas com ações como cursos e oficinas de corte e costura, 
                    com foco em fantasias de carnaval e de outras festas populares, para  mulheres desta e de outras comunidades, 
                    tendo como objetivo a capacitação e geração de renda para  as comunidades. 
                </p>

                <h3 className="h3-equipe" >O Projeto</h3>

                <p className="paragraph-equipe">
                O projeto pretende atuar na preservação da memória do bloco e da revitalização do carnaval de rua carioca, 
                criando e publicando um repositório/museu virtual com toda a história do bloco, organizada por ano de desfile. 
                Esse formato pretende destacar o  aspecto cronista do bloco. Como resultado, extenso material estará disponível na rede 
                para consulta por pesquisadores e pelo público em geral. Para impulsionar sua 
                divulgação e interatividade serão usadas as redes sociais do bloco e da ONG. A interação deve levar à 
                expansão do acervo, com registros diversos.</p>
                
                <p className="paragraph-equipe">
                Com formato interdisciplinar, o projeto conta no momento com a participação de alunos extensionistas
                do curso de Ciência da Computação e do curso de História da Arte. 
                Expansão para acolhimento de estudantes de Comunicação Social e outros cursos da Escola de Belas Artes é prevista. 
                Docentes e técnicos da UFRJ complementam a equipe do projeto,  que tem coordenação da professora Anamaria Martins Moreira (IC/UFRJ). 
                </p>

                <h3 className="h3-equipe" >Objetivos</h3>

                <p className="paragraph-equipe">Preservar e divulgar a memória do bloco, um dos responsáveis pela revitalização do  carnaval de rua carioca. Fazer conhecer essa história para o público em geral e  disponibilizar material de pesquisa organizado para pesquisadores interessados no tema.  Capacitar estudantes extensionistas para a construção de repositórios e sites estáticos e  interativos; preparação e divulgação de conteúdo em diversos formatos;  diagramação; processos de revisão de texto e conteúdo para publicação; digitalização  de material impresso; interlocução com participantes de diferentes áreas do  conhecimento, permitindo múltiplas perspectivas sobre curadoria de acervos,  preservação e divulgação de materiais culturais.</p>

                <h3 className="h3-equipe" >Metodologia</h3>

                <p className="paragraph-equipe">Em um primeiro momento, a proposta é a capacitação dos estudantes para o trabalho em  equipe multidisciplinar e desenvolvimento e disponibilização de um produto de  qualidade (o site/museu virtual), com o foco na preservação da memória de um  movimento de grande importância econômica e cultural para a cidade do Rio de Janeiro:  a revitalização do carnaval de rua. Em especial, espera-se promover a conscientização  sobre a importância da cultura e do patrimônio cultural, além de estimular o senso de  pertencimento à comunidade. A sociedade, por outro lado, tem acesso a um  conhecimento qualificado e atualizado, que pode ser utilizado para o desenvolvimento  de políticas públicas, projetos sociais e iniciativas inovadoras. 
                </p>

                <h3 className="h3-equipe">Conteúdo</h3>

                <p className="paragraph-equipe">Para cada ano será disponibilizado: contexto histórico; samba do ano; compositores;  puxadores dos sambas e músicos participantes; camisetas, material gráfico e artistas  responsáveis; porta bandeira e mestre sala; baianas; bateria e puxadores; ensaios, disputa do samba, festas e outros mecanismos de financiamento; desfile; o bloco na  mídia; espaço para interação do público do site, com publicação de fotos, vídeos e  depoimentos marcados com as redes sociais do bloco, da ONG e do projeto.
                </p>

                <h3 className="h3-equipe">Equipe</h3>

                <p className="paragraph-equipe">Esse projeto foi desenvolvido em uma colaboração entre
                    o Instituto de Computação da UFRJ, a Escola de Belas Artes da UFRJ e parceiros do Bloco Suvaco do Cristo.</p>
                {/* colocar os nomes sendo links para os sites dos institutos*/}


                <h4 className="h4-equipe">Coordenação</h4>
                <ul>
                    <li className="li-projeto"> Anamaria Martins Moreira (IC)</li>
                </ul>

                <h4 className="h4-equipe"> Membros da UFRJ </h4>

                <ul>
                    <li className="li-projeto">Claudia Dos Santos Goes (Casa da Ciência/UFRJ)</li>
                    <li className="li-projeto">Helenise Monteiro Guimaraes (EBA)</li>
                    <li className="li-projeto">Hugo Musso Gualandi (IC)</li>
                    <li className="li-projeto">Tiago Matias da Silva (IC)</li>
                    <li className="li-projeto">Vanessa Dupheim Pinheiro (EBA)</li>
                </ul>

                <h4 className="h4-equipe">Parceiros do Suvaco</h4>

                <ul>
                    <li className="li-projeto">João Carlos Regazzi Avelleira</li>
                </ul>

                <h4 className="h4-equipe">Alunos da UFRJ</h4>

                <ul>
                    <li className="li-projeto">Anna Cristina Ferreira Alves (IC)</li>
                    <li className="li-projeto">Artur Henrique Teixeira do Amaral (IC)</li>
                    <li className="li-projeto">Carlos Chagas Oliveira Filho (IC)</li>
                    <li className="li-projeto">Guilherme Cappelli Bouzon de Amorim Cruz (IC)</li>
                    <li className="li-projeto">Igor de Andrade Assuncao de Almeida (IC)</li>
                    <li className="li-projeto">Julia Vilela da Silva Brito (IC)</li>
                    <li className="li-projeto">Laura Luz Santos Soares (EBA)</li>
                    <li className="li-projeto">Maria Luisa Lima De Omena (EBA)</li>
                    <li className="li-projeto">Riquelme Freitas Gomes (IC)</li>
                    <li className="li-projeto">Vitor Vicente Da Motta (IC)</li>
                </ul>
                {/** Colocar logos aqui*/}

                <div className="footer-section">
                    <Link id="link-txt" to="/" onClick={() => window.scrollTo(0, 0)}>VOLTAR</Link>

                        <div className="line"></div>       
            </div>
            </div>
        </section>
    )


}

export default PageEquipe;