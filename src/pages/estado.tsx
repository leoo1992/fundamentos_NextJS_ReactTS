import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Estado.module.css";
export default function Estado() {
    const [numero, setNumero ]= useState(0);




    return (
        <Layout titulo="Estado">
            <button className={styles.botaoPadrao} onClick={() => setNumero(numero - 1)}>-</button>
            <span className={styles.number}>{numero}</span>
            <button className={styles.botaoPadrao} onClick={() => setNumero(numero + 1)}>+</button>
        </Layout>
    )
}
