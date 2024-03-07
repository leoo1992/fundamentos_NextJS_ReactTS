import styles from "../../styles/[ClienteId].module.css";
import Navegador from "../../components/Navegador";
import {useRouter} from 'next/router'

export default function ClienteId() {
const router = useRouter();


  return (
    <div className={styles.header}>
    <h1 className={styles.titulo}>Cliente {router.query.clienteId}</h1>

    <div className={styles.navegadores}>
      <Navegador destino="/" texto="Voltar" cor="indigo"/>
    </div>
  </div>
  )
}
