const express = require('express')
const routers = require('./routers')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
app.use(routers)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});