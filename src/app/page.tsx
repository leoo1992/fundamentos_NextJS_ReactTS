
import Navegador from "../components/Navegador";
import styles from "../styles/Page.module.css";

export default function Home() {

  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Home</h1>

        <Navegador destino="/pagina" texto="Pagina" cor="indigo" />
         

      </div>
    </main>
  );
}
