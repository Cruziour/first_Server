require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 4000
const hosṭname  = "http://localhost"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chai', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/login', (req, res) => {
    res.send('<h2>Login</h2>')
})

app.get('/justforfun', (req, res) => {
    res.send('<h2>Just for fun</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${hosṭname}:${port}`)
})