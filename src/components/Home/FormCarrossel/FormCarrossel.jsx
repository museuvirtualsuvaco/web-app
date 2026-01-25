import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './FormCarrossel.module.css'
import anos from "../../../constants/anos";
import AnoSearchForm from "./components/AnoSearchForm";
import AnoCarrossel from "./components/AnoCarrossel";
import { useCarrosselScroll } from "../../../hooks/useCarrosselScroll";

export default function FormCarrossel() {

  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const { carrosselRef, scroll } = useCarrosselScroll();

  const anosValidos = useMemo(
    () => Array.from({ length: 2026 - 1986 + 1 }, (_, i) => 1986 + i),
    []
  );

  const anosFiltrados = useMemo(() => {
    if (!busca) return anos;
    return anos.filter((a) => a.nome.toString().includes(busca));
  }, [busca]);

  function handleSubmit(e) {
    e.preventDefault();
    const ano = Number(busca);
    if (anosValidos.includes(ano)) {
      navigate(`/${ano}`);
    }
  }

  function handleAnoClick(item) {
    if (!item.disabled) {
      navigate(`/${item.nome}`);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <AnoSearchForm
          value={busca}
          onChange={setBusca}
          onSubmit={handleSubmit}
        />

        <AnoCarrossel
          anos={anosFiltrados}
          carrosselRef={carrosselRef}
          onAnoClick={handleAnoClick}
          onScrollLeft={() => scroll(-1)}
          onScrollRight={() => scroll(1)}
        />
      </div>

    </>
  );
}
