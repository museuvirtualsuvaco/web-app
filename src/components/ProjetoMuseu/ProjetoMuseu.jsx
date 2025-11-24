import React from "react";
import styles from "./ProjetoMuseu.module.css";

import BtnVoltar from "../VoltarBtn/BtnVoltar";

import logoUFRJ from "../../assets/ufrj-horizontal-cor-rgb-telas 1.svg";
import logoIC from "../../assets/Sem títuloaaaaa 1.svg";
import logoEBA from "../../assets/307093807_543650020901618_4682476023594602429_n 1.png";


import divisor from "../../assets/Group 28.svg";

import equipe from "../../constants/equipe.js";

const ProjetoMuseu = () => {
  const cores = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFC75F", "#845EC2"];

  const gerarAvatar = (nome) => {
    const primeiraLetra = nome.charAt(0).toUpperCase();
    const cor = cores[nome.charCodeAt(0) % cores.length];
    return (
      <div className={styles.avatarPlaceholder} style={{ backgroundColor: cor }}>
        {primeiraLetra}
      </div>
    );
  };

  return (
    <div>
      <main className={styles.introSection}>
        <div className={styles.homeText}>
          <p>
            Qual é o papel de universidades como a UFRJ e da sociedade em geral
            na preservação e divulgação da memória do carnaval de rua do Rio de
            Janeiro?
          </p>

          <p>
            Essa indagação foi a motivação para a criação do projeto de extensão
            “Museu virtual do carnaval de rua do Rio de Janeiro – O bloco Suvaco
            do Cristo”, um dos responsáveis pela revitalização do carnaval de
            rua carioca. Através de uma parceria entre a presidência do bloco e
            o Instituto de Computação (IC/UFRJ), nasceu a ideia de construir um
            espaço para que essa história seja contada e continuada.
          </p>
        </div>

        <div className={styles.homeLogo}>
          <img className={styles.logoUfrj} src={logoUFRJ} alt="Logo UFRJ" />
          <img className={styles.logoIc} src={logoIC} alt="Logo IC" />
          <img className={styles.logoEba} src={logoEBA} alt="Logo História da Arte" />
        </div>

        <img src={divisor} className={styles.group28Gradiente} alt="divisor ondulado" />
      </main>

      <section className={styles.areaVerde}>
        <h2 className={styles.titleSection}>Objeto de pesquisa</h2>

        <div className={styles.box}>
          <p>
            O bloco Suvaco do Cristo é reconhecido como um dos responsáveis pela
            revitalização do carnaval de rua do Rio de Janeiro, desde meados dos
            anos 1980. O nome do bloco surgiu de uma entrevista com o maestro e
            compositor Tom Jobim, morador do bairro do Jardim Botânico, em que
            dizia que o bairro era o “sovaco” do Cristo por causa do mofo nos
            armários de sua casa. O quartel-general do bloco era na rua Maria
            Angélica, localizada em uma linha reta a partir das axilas da estátua
            do Cristo Redentor, no morro do Corcovado. E o nome pegou rápido.
          </p>

          <p>
            Criado por um grupo de artistas e profissionais liberais, o Suvaco do
            Cristo nasceu nas areias do Posto Nove, na Praia de Ipanema, e tinha
            como lema a liberdade, a picardia e a festa. A proposta era agitar,
            juntar uma porção de gente amiga e sair por aí se divertindo. Assim,
            entre pássaros, micos e as ruas bucólicas do Jardim Botânico, o
            Suvaco se tornaria uma referência para o surgimento de inúmeros
            outros blocos de bairro no Rio.
          </p>
          <p>
            Ao longo de sua história, sambas antológicos assinados por Lenine,
            Nanico, Chacal, Janjão, Gallotti, Casuarina, Mu Chebabi entre outros,
            desfilaram pelas ruas do bairro da Zona Sul carioca. A bateria,
            comandada pelos mestres Felipão e Tião Belo (in memoriam) é um grande
            caso de amor entre o Suvaco e a comunidade Santa Marta, em Botafogo.
            Há cerca de vinte anos, a bandeira do bloco desfila nas mãos da
            apresentadora Cynthia Howlett. Da relação com a comunidade Santa
            Marta, surgiu em 2008, a ONG Divinas Axilas com ações como cursos e
            oficinas de corte e costura, com foco em fantasias de carnaval e de
            outras festas populares, para mulheres desta e de outras comunidades,
            tendo como objetivo a capacitação e geração de renda para as
            comunidades.
          </p>
        </div>

        <h2 className={styles.titleSectionNoPadding}>O PROJETO</h2>

        <div className={styles.box}>
          <p>
            O projeto pretende atuar na preservação da memória do bloco e da
            revitalização do carnaval de rua carioca, criando e publicando um
            repositório/museu virtual com toda a história do bloco, organizada por
            ano de desfile. Esse formato pretende destacar o aspecto cronista do
            bloco.
          </p>

          <p>
            Como resultado, extenso material estará disponível na rede para
            consulta por pesquisadores e pelo público em geral. Para impulsionar
            sua divulgação e interatividade serão usadas as redes sociais do bloco
            e da ONG. A interação deve levar à expansão do acervo, com registros
            diversos.
          </p>
          <p>
            Com formato interdisciplinar, o projeto conta no momento com a
            participação de alunos extensionistas do curso de Ciência da Computação
            e do curso de História da Arte. Expansão para acolhimento de estudantes
            de Comunicação Social e outros cursos da Escola de Belas Artes é
            prevista. Docentes e técnicos da UFRJ complementam a equipe do projeto,
            que tem coordenação da professora Anamaria Martins Moreira (IC/UFRJ).
          </p>
        </div>

        <h2 className={styles.titleSectionNoPadding}>OBJETIVOS</h2>

        <div className={styles.box}>
          <p>
            Preservar e divulgar a memória do bloco, um dos responsáveis pela
            revitalização do carnaval de rua carioca. Fazer conhecer essa história
            para o público em geral e disponibilizar material de pesquisa
            organizado para pesquisadores interessados no tema. Capacitar
            estudantes extensionistas para a construção de repositórios e sites
            estáticos e interativos; preparação e divulgação de conteúdo em
            diversos formatos; diagramação; processos de revisão de texto e
            conteúdo para publicação; digitalização de material impresso;
            interlocução com participantes de diferentes áreas do conhecimento,
            permitindo múltiplas perspectivas sobre curadoria de acervos,
            preservação e divulgação de materiais culturais.
          </p>
        </div>

        <h2 className={styles.titleSectionNoPadding}>METODOLOGIA</h2>

        <div className={styles.box}>
          <p>
            Em um primeiro momento, a proposta é a capacitação dos estudantes para
            o trabalho em equipe multidisciplinar e desenvolvimento e
            disponibilização de um produto de qualidade (o site/museu virtual), com
            o foco na preservação da memória de um movimento de grande importância
            econômica e cultural para a cidade do Rio de Janeiro: a revitalização
            do carnaval de rua.
          </p>
          <p>
            Em especial, espera-se promover a conscientização sobre a importância
            da cultura e do patrimônio cultural, além de estimular o senso de
            pertencimento à comunidade. A sociedade, por outro lado, tem acesso a
            um conhecimento qualificado e atualizado, que pode ser utilizado para o
            desenvolvimento de políticas públicas, projetos sociais e iniciativas
            inovadoras.
          </p>
        </div>

        <h2 className={styles.titleSectionNoPadding}>EQUIPE</h2>

        <div className={styles.box}>
          <p>
            Esse projeto foi desenvolvido em uma colaboração entre o Instituto de
            Computação da UFRJ, a Escola de Belas Artes da UFRJ e parceiros do
            Bloco Suvaco do Cristo.
          </p>
        </div>

        <h2 className={styles.titleSectionEquipe}>COORDENAÇÃO</h2>

        <div className={styles.box}>
          <div className={styles.divFotos}>
            {equipe
              .filter((p) => p.section === 1)
              .map((p) => (
                <div key={p.nome} className={styles.membro}>
                  {p.foto ? (
                    <img className={styles.membroFoto} src={p.foto} alt={p.nome} />
                  ) : (
                    gerarAvatar(p.nome)
                  )}
                  <p>
                    {p.nome} {p.instituto && `(${p.instituto})`}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <h2 className={styles.titleSectionEquipe}>MEMBROS DA UFRJ</h2>

        <div className={styles.box}>
          <div className={styles.divFotos}>
            {equipe
              .filter((p) => p.section === 2)
              .map((p) => (
                <div key={p.nome} className={styles.membro}>
                  {p.foto ? (
                    <img className={styles.membroFoto} src={p.foto} alt={p.nome} />
                  ) : (
                    gerarAvatar(p.nome)
                  )}
                  <p>
                    {p.nome} {p.instituto && `(${p.instituto})`}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <h2 className={styles.titleSectionEquipe}>PARCEIROS</h2>

        <div className={styles.box}>
          <div className={styles.divFotos}>
            {equipe
              .filter((p) => p.section === 3)
              .map((p) => (
                <div key={p.nome} className={styles.membro}>
                  {p.foto ? (
                    <img className={styles.membroFoto} src={p.foto} alt={p.nome} />
                  ) : (
                    gerarAvatar(p.nome)
                  )}
                  <p>{p.nome} </p>
                </div>
              ))}
          </div>
        </div>

        <h2 className={styles.titleSectionEquipe}>Alunos da UFRJ</h2>

        <div className={styles.LastBox}>
          <div className={styles.divFotos}>
            {equipe
              .filter((p) => p.section === 4)
              .map((p) => (
                <div key={p.nome} className={styles.membro}>
                  {p.foto ? (
                    <img className={styles.membroFoto} src={p.foto} alt={p.nome} />
                  ) : (
                    gerarAvatar(p.nome)
                  )}
                  <p>{p.nome} {p.instituto && `(${p.instituto})`}</p>
                </div>
              ))}
          </div>
        </div>
        <h2 className={styles.titleSectionEquipe}>Ex-Membros</h2>

        <div className={styles.LastBox}>
          <div className={styles.divFotos}>
            {equipe
              .filter((p) => p.section === 5)
              .map((p) => (
                <div key={p.nome} className={styles.membro}>
                  {p.foto ? (
                    <img className={styles.membroFoto} src={p.foto} alt={p.nome} />
                  ) : (
                    gerarAvatar(p.nome)
                  )}
                  <p>{p.nome} {p.instituto && `(${p.instituto})`}</p>
                </div>
              ))}
          </div>
        </div>

        <BtnVoltar />
        <div className={styles.greenSpace}></div>
      </section>
    </div>
  );
};

export default ProjetoMuseu;
