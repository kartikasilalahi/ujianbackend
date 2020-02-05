const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Test Connection Database
const db = require('./connection/index')
db.connect(err => {
    if (err) throw err
    console.log('mysql connected..')
})

// Set Middleware
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => res.send('HELLO BACKEND'))


// set PORT
const PORT = process.env.PORT || 4001
app.listen(PORT, console.log(`Server running on PORT: ${PORT}`))