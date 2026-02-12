import styles from '../../ProjetoMuseu.module.css'


export default function EquipeMembro({ membro }) {
    
    if (!membro) return null

    
    const gerarAvatar = (nome) => {
        // Pega a primeira letra e garante que seja maiúscula
        const primeiraLetra = nome.charAt(0).toUpperCase();

        // Verifica se é uma letra de A-Z, caso contrário usa uma padrão
        const eLetraValida = /^[A-Z]$/.test(primeiraLetra);
        const letraArquivo = eLetraValida ? primeiraLetra : "P"; // 'P' de Placeholder ou qualquer outra padrão


        //Precisa substituir quando fizer o banco de dados
        const caminhoImagem = `/placeholders/PlaceHolder${letraArquivo}.png`;

        return (
            <img
                className={styles.membroFoto}
                src={caminhoImagem}
                alt={`Placeholder ${primeiraLetra}`}
            />
        );
    };


    return (

        
        <div className={styles.membro}>
            {membro.foto ? (
                <img
                    className={styles.membroFoto}
                    src={membro.foto}
                    alt={membro.nome}
                />
            ) : (
                gerarAvatar(membro.nome)
            )}

            <p>
                {membro.nome}
                {membro.instituto && ` (${membro.instituto})`}
            </p>
        </div>
    )
}