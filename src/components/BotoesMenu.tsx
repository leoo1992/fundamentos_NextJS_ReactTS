
import Navegador from "../components/Navegador";
import styles from "../styles/Page.module.css";

export default function BotoesMenu() {


  return (
    <div className={styles.navegadores}>
      <Navegador destino="/estado" texto="Estado" cor="indigo" />
      <Navegador destino="/cliente/1" texto="Cliente" />
      <Navegador destino="/teste" texto="Teste" cor="#0f5b06" />
      <Navegador destino="/integracao" texto="Integração" cor="#a83e02" />
      <Navegador destino="/estatico" texto="Estatico" cor="#fa5000" />
    </div>
  );
}
