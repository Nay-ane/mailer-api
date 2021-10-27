const knex = require('../conexao')
const bcrypt = require('bcrypt')


const subscribe =  async(req, res) => {
    const { nome: name, email, senha: password } = req.body

    if(!name) return res.status(400).json({mensagem: 'O campo nome é de preenchimento obrigatório'})
    if(!email) return res.status(400).json({mensagem: 'O campo email é de preenchimento obrigatório'})
    if(!password) return res.status(400).json({mensagem: 'O campo senha é de preenchimento obrigatório'})

    try {
        const subscribedUser = await knex('subscribes').where({email}).first()

        if(subscribedUser) return res.status(400).json({mensagem: "Já existe um usuário cadastrado para o email informado"})

        const encryptedPassword = await bcrypt.hash(password, 10)

        const newSubscribe = await knex('subscribes').insert({
            name,
            email,
            password: encryptedPassword
        })

        if(!newSubscribe) return res.status(400).json({mensagem: "Não foi possível cadastrar o usuário"})

        return res.status(201).json({mensagem: "Pronto! Agora você está inscrito em nossa newsletter."})

    } catch (error) {
        return res.status(400).json(error.message)
    }
}


module.exports = subscribe