const express = require('express')
const serverless = require("serverless-http")
const cors = require('cors')

const PORT = 8025
const app = express()

const router = express.Router()

app.use(cors())

router.get('/', (req, res) => {
    res.send('This is the root endpoint')
})

router.get('/jawn', (req, res) => {
    res.send("This is the jawn endpoint")
})

app.use('/', router)

app.listen(PORT, () => console.log(`Server is RUnning on PORT: ${PORT}`))

module.exports.handler = serverless(app)