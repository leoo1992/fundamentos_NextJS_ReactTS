import BotoesMenu from "../components/BotoesMenu";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Navegador from "../components/Navegador";
import styles from "../styles/Pagina.module.css";

export default function Pagina() {
  const [larguraTela, setLarguraTela] = useState<number | null>(null);

  useEffect(() => {
    setLarguraTela(window.innerWidth);

    function handleResize() {
      setLarguraTela(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout titulo="Pagina">
      {larguraTela !== null &&
        (larguraTela > 430 ? (
          <BotoesMenu />
        ) : (
          <div className={styles.navegadores}>
            <Navegador destino="/estado" texto="Estado" cor="indigo" />
            <Navegador destino="/cliente/1" texto="Cliente" />
            <Navegador destino="/teste" texto="Teste" cor="#0f5b06" />
            <Navegador destino="/integracao" texto="Integração" cor="#a83e02" />
            <Navegador destino="/estatico" texto="Estatico" cor="#fa5000" />
          </div>
        ))}
    </Layout>
  );
}
