import Layout from "../components/Layout";

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    }
  }
}

export default function Estatico(props) {
  return (
    <Layout titulo="Estatico">
      <div>
        {props.numero}
      </div>
    </Layout>
  )
}
