import React from "react";
import styles from "../DesfileContent/Desfile1986.module.css";

export default function GridGaleria({ imagens }) {
    if (!imagens || imagens.length === 0) return null;

    return (
        <div className={styles.gridArea}>
            <div className={styles.gridVisual}>
                {imagens.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className={
                            index === 0
                                ? styles.imgBoxGrande
                                : styles.imgBox
                        }
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
}
