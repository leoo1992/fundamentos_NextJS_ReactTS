import styles from "../styles/Layout.module.css";
import Navegador from "./Navegador";

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1 className={styles.tituloCabecalho}>{props.titulo}</h1>
        <div>
          <Navegador destino='/' texto='Voltar'/>
        </div>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  );
}
