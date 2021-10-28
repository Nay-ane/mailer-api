
const sendEmail = async(req, res) => {
    const subject = req.body

    if(!!Object.values(subject)) return res.status(400).json({mensagem: "Não é possível enviar o email sem um texto"})

}

module.exports = sendEmail 