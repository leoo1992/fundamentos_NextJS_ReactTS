export default function handlerClienteId(req, res) {
    res.status(200).json({
        id: req.query.clienteId,
        nome: "Leonardo",
        email: "santos-contato@hotmail.com.br",
    })
}
