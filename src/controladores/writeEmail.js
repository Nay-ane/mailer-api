const knex = require('../conexao')

const writeEmail = async(req, res) => {
    const subject = req.body

    if(!!Object.values(req.body)) return res.status(400).json({mensagem: "Não é possível enviar o email sem um texto"})

}

module.exports = writeEmail 