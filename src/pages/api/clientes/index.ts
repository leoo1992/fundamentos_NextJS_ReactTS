export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      handlerGET(req, res);
      break;
    default:
      res.status(405).end(`Método ${req.method} não permitido.`);
      break;
  }
}

function handlerGET(req, res) {
  res.status(200).json({
    id: 1,
    nome: "Leonardo",
    email: "santos-contato@hotmail.com.br",
  });
}
