import styles from "../styles/Page.module.css";
import Navegador from "../components/Navegador";

export default function Home() {
  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Home</h1>

        <div className={styles.navegadores}>
          <Navegador destino="/estado" texto="Estado" cor = "indigo"/>
          <Navegador destino="/cliente/1" texto="Cliente" />
          <Navegador destino="/teste" texto="Teste" cor = "#0f5b06"/>
        </div>
      </div>
    </main>
  );
}
