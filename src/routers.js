const express = require('express')
const subscribe = require('./controladores/subscribes')

const routers = express()

routers.post('/inscreva-se', subscribe)
routers.post('/escrever-email', writeEMail)

module.exports = routers