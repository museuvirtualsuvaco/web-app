import React from "react";

import styles from './Video.module.css'
import video from '../../../assets/video.mp4'

export default function Video(){
    return (
<div className={styles["bg-gradient"]}>
    <div className={styles["video-section"]}>
        <div className={styles["video-wrapper"]}>
            <video autoPlay loop muted className={styles["background-video"]}>
                <source src={video} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
            </video>
        </div>
    </div>
</div>
    )}