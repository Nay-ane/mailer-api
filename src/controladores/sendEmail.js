const transporter = require('../transporter')
const knex = require('../conexao')

const sendEmail = async(req, res) => {
    const emailText = req.body.text

    if(!Object.values(emailText)) return res.status(400).json({mensagem: "Não é possível enviar o email sem um texto"})

    const subscriberList = await knex.select('*').from('subscribes')

    try {
        subscriberList.forEach(subscriber => {
            transporter.sendMail({
                from: 'Cubos Newsletter - <news@cubosnewsletter.com.br>',
                to: subscriber.email,
                subject: 'Newsletter Cubos',
                template: 'newsemail',
                context: {
                    nome: subscriber.nome,
                    texto: emailText
                },
            })
        });
    
        return res.status(200).json({mensagem: 'Newsletter enviado com sucesso'})
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
    
    

}

module.exports = sendEmail 