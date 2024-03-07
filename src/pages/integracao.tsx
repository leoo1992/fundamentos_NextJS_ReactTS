import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {
  const [cliente, setCliente] = useState({} as cliente);
  const [Id, setId]: [number, React.Dispatch<React.SetStateAction<number>>] =
    useState(0);

  type cliente = {
    id: string;
    nome: string;
    email: string;
  };


  async function ObterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${Id}`);
    const dados = await resp.json();
    setCliente(dados);


    //SYNC
    //     fetch(`http://localhost:3000/api/clientes/${Id}`)
    //       .then((response) => response.json())
    //       .then((dados) => setCliente(dados));
  }



  return (
    <Layout titulo="Integração com API">
      <div>
        <input
          type="number"
          value={Id}
          onChange={(e) => setId(parseInt(e.target.value))}
        />
        <button onClick={ObterCliente}> Obter Cliente </button>
      </div>
      <ul>
        <li>Id: {cliente.id} </li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email} </li>
      </ul>
    </Layout>
  );
}
