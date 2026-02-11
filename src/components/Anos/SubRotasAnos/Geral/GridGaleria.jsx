import React from "react";
import styles from "../DesfileContent/Desfile.module.css";
import { getPhoto } from '../../../../hooks/getPhoto'
export default function GridGaleria({ ano, imagens }) {
    if (!imagens || imagens.length === 0) return null;
    return (
        <div className={styles.gridArea}>
            <div className={styles.gridVisual}>
                {imagens.map((img, index) => (
                    
                    <img
                        key={index}
                        src={getPhoto(ano,img)}
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