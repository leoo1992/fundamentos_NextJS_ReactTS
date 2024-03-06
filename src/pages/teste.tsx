import Layout from "../components/Layout";
import styles from "../styles/Teste.module.css";
export default function teste() {
  return (
    <>
      <Layout titulo="Teste">
        <h1 className={styles.titulo}>Teste</h1>
      <div className={styles.conteudo}>
        <div className={styles.card}>Card Text</div>
      </div>
      </Layout>

    </>
  )
}
