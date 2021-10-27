const express = require('express')
const subscribe = require('./controladores/subscribes')

const routers = express()

routers.post('/inscreva-se', subscribe)

module.exports = routers