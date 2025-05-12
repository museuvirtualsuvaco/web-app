import React, { useState, useEffect } from "react";
import "./PageAcervo.css";
import { Link } from "react-router-dom";
import { renderTitleSubtitle } from "../functions";
import categorias from "../json/categorias.json";
import DATA from "../json/resultado_formatado.json";

function PageAcervo(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriasClicadas, setCategoriasClicadas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fullScreenActivated, setFullScreenActivated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    const itemsPerPage = 10;
    const categoriaAnos = [...new Set(DATA.map(item => item.year).filter(Boolean))].sort();

    // Image loading effect
    useEffect(() => {
        const loadImages = async () => {
            setLoading(true);
            const imagePromises = imagensExibidas.map(item => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = `img/${item.item}`;
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            });
            await Promise.all(imagePromises);
            setLoading(false);
        };

        loadImages();
    }, [categoriasClicadas]); // Reload when filters change

    // Page synchronization effect
    useEffect(() => {
        if (currentIndex !== null) {
            const newPage = Math.floor(currentIndex / itemsPerPage) + 1;
            if (newPage !== currentPage) {
                setCurrentPage(newPage);
            }
        }
    }, [currentIndex, itemsPerPage, currentPage]);

    const imagensExibidas = DATA.filter(item => {
        if (!item.online || item.type !== "imagem") return false;

        const keywordsArray = item.keywords ? item.keywords.split(",").map(k => k.trim().toLowerCase()) : [];
        const anoSelecionado = categoriasClicadas.filter(cat => !isNaN(cat)).length > 0;
        const categoriaSelecionada = categoriasClicadas.filter(cat => isNaN(cat)).length > 0;

        const correspondeAno = categoriasClicadas.includes(item.year.toString());
        const correspondeCategoria = categoriasClicadas.some(cat => keywordsArray.includes(cat.toLowerCase()));

        if (anoSelecionado && !categoriaSelecionada) return correspondeAno;
        if (!anoSelecionado && categoriaSelecionada) return correspondeCategoria;
        if (anoSelecionado && categoriaSelecionada) return correspondeAno && correspondeCategoria;
        return true;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imagensExibidas.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(imagensExibidas.length / itemsPerPage);

    const toggleMenuOpen = () => setMenuOpen(prev => !prev);

    const handleCategoryClick = (e) => {
        const category = e.target.innerText;
        setCategoriasClicadas(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
        setCurrentPage(1);
    };

    const handleYearClick = (e) => {
        const year = e.target.innerText;
        setCategoriasClicadas(prev => 
            prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
        );
        setCurrentPage(1);
    };

    const imgFullScreen = (index) => {
        setFullScreenActivated(true);
        setCurrentIndex(index);
    };

    const closeFullScreen = () => {
        setFullScreenActivated(false);
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : imagensExibidas.length - 1);
    };

    const nextImage = () => {
        setCurrentIndex(prev => prev < imagensExibidas.length - 1 ? prev + 1 : 0);
    };

    const renderPagination = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("...");

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 2) pages.push("...");
            pages.push(totalPages);
        }

        return pages.map((num, idx) => (
            <button
                key={idx}
                className={`page-button ${currentPage === num ? "active" : ""}`}
                onClick={() => typeof num === "number" && setCurrentPage(num)}
                disabled={num === "..."}
            >
                {num}
            </button>
        ));
    };

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle(props.title, props.subtitle)}

                <button id="categorias-button" onClick={toggleMenuOpen}>
                    Selecione as categorias desejadas <i className="ri-arrow-drop-down-line"></i>
                </button>

                {menuOpen && (
                    <div className="dropdown-flex">
                        <div className="dropdown1">
                            <span className="filter-title">Características</span>
                            <div className="dropdown">
                                {categorias.map((cat, i) => (
                                    <li
                                        key={i}
                                        onClick={handleCategoryClick}
                                        className={`categoria-item ${categoriasClicadas.includes(cat) ? "selecionada" : ""}`}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </div>
                        </div>

                        <div className="dropdown2">
                            <span className="filter-title">Anos</span>
                            <div className="dropdown">
                                {categoriaAnos.map((ano, i) => (
                                    <li
                                        key={i}
                                        onClick={handleYearClick}
                                        className={`categoria-item ${categoriasClicadas.includes(ano.toString()) ? "selecionada" : ""}`}
                                    >
                                        {ano}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            {loading ? (
                    <span className="loader"></span>
                ) : (
                    <div className="portfolio">
                        {currentItems.map((item, i) => (
                            <img
                                key={i}
                                src={`img/${item.item}`}
                                alt={item.desc}
                                onClick={() => imgFullScreen(indexOfFirstItem + i)}
                            />
                        ))}
                    </div>
                )}

                <div className="pagination">{renderPagination()}</div>

                {fullScreenActivated && currentIndex !== null && (
                    <div className="fullscreen-container" onClick={closeFullScreen}>
                        <img
                            className="fullscreen"
                            src={`img/${imagensExibidas[currentIndex].item}`}
                            alt={imagensExibidas[currentIndex].desc}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="thumbnails">
                            {imagensExibidas.slice(
                                Math.max(0, currentIndex - 3),
                                currentIndex + 4
                            ).map((item, i) => (
                                <img
                                    key={i}
                                    className={`thumb ${currentIndex === imagensExibidas.indexOf(item) ? "active" : ""}`}
                                    src={`img/${item.item}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(imagensExibidas.indexOf(item));
                                    }}
                                    alt="Miniatura"
                                />
                            ))}
                        </div>

                        <div className="flex-acervo-botoes">
                            <button className="nav-btn left" onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}>
                                <i className="ri-arrow-left-line"></i>
                            </button>
                            <button className="close-btn" onClick={closeFullScreen}>
                                <i className="ri-close-large-line"></i>
                            </button>
                            <button className="nav-btn right" onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}>
                                <i className="ri-arrow-right-line"></i>
                            </button>
                        </div>
                    </div>
                )}

                <div className="footer-section">
                    <Link id="link-txt" to="/" onClick={() => window.scrollTo(0, 0)}>VOLTAR</Link>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
}

export default PageAcervo;