import { useRef } from "react";

export function useCarrosselScroll() {
  const carrosselRef = useRef(null);

  function scroll(direcao) {
    if (!carrosselRef.current) return;

    const item = carrosselRef.current.querySelector("[data-item]");
    if (!item) return;

    const { marginRight } = window.getComputedStyle(item);
    const itemWidth = item.offsetWidth + parseInt(marginRight || 0, 10);

    carrosselRef.current.scrollBy({
      left: direcao * itemWidth,
      behavior: "smooth",
    });
  }

  return { carrosselRef, scroll };
}
