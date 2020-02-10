const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const db = require('./connection/index')
db.connect(err => {
    if (err) throw err
    console.log('mysql connected..')
})

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))

app.use(cors())
const { movieRouter } = require('./router')

app.get('/', (req, res) => res.send('<h1>INI HOME PAGE</h1>'))
app.use('/movie', movieRouter)

const PORT = process.env.PORT || 4001
app.listen(PORT, console.log(`Server di PORT: ${PORT}`))