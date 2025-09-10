import React from "react";
import styles from './BtnVoltar.module.css'

import { Link, useNavigate } from 'react-router-dom';

export default function BtnVoltar() {

    const navigate = useNavigate();

    return (<>
        <button
            className={styles.btn}
            onClick={() => {
                navigate(-1);
                window.scrollTo(0, 0);
            }}
            
        >Voltar</button>
    </>)
}