import Link from "next/link";
import styles from "../styles/Navegador.module.css";

export default function Navegador(props) {
  return (
    <Link href={props.destino} passHref className={styles.buttonLink} style={{backgroundColor: props.cor ??  '#2c68e8' }}>
      {props.texto}
    </Link>
  );
}
