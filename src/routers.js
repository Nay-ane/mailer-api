const express = require('express')
const subscribe = require('./controladores/subscribes')
const sendEmail =  require('./controladores/sendEmail')

const routers = express()

routers.post('/inscreva-se', subscribe)
routers.post('/envie-email', sendEmail)

module.exports = routers