import React from "react";
import { Link } from "react-router-dom";
import styles from '../SambaContent/SambaConteudo.module.css'



const importImagem = (fileName) =>
  new URL(`../../../assets/artistas/${fileName}`, import.meta.url).href;

export default function ListaArtistas({ ids, pessoas, tipo }) {
  return (
    <>
      {ids.map((id) => {
        const pessoa = pessoas[id];
        if (!pessoa) return null;

        return (
          <div key={id} className={styles.profile}>
            {tipo && <span className={styles.tipo}>{tipo}</span>}

            <Link to={`/artista/${id}`}>
              <img
                className={styles.avatar}
                src={importImagem(pessoa.imgFile)}
                alt={pessoa.name}
              />
              <span className={styles.nome}>{pessoa.name}</span>
            </Link>
          </div>
        );
      })}
    </>
  );
}
