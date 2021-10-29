const knex = require('knex')({
    client:'pg',
    connection: {
        host: 'ec2-18-211-236-255.compute-1.amazonaws.com',
        user: 'zmbajeitwkbmyg',
        password: '1638fd09b834dbe1729bcbdccaf153e2a5041b605c5c306124725b8e6c4b4a12',
        database: 'dejs6bo1hkfmf9',
        port: 5432,
        ssl:{
            rejectUnauthorized: false
        }
    }
})


module.exports = knex