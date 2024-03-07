import BotoesMenu from "../components/BotoesMenu";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

export default function Pagina() {
  const [larguraTela, setLarguraTela] = useState(null);

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
      {larguraTela &&
        (larguraTela > 430 ? (
          <BotoesMenu />
        ) : (
          <p>A tela é menor que 430px de largura.</p>
        ))}
    </Layout>
  );
}
