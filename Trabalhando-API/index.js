const express = require('express')

const app = express()

app.listen('4001')


// meddleware
app.use(express.json())

app.route('/').post( (req,res) => {
    const {nome, cidade} = req.body
   res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})