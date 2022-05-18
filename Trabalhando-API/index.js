const express = require('express')

const app = express()

app.listen('4001')

app.route('/').get( (req,res) => {
    res.send('hello')
})
app.route('/:var').get( (req,res) => {
    res.send(req.params.var)
})
app.route('/identidade/:nome').get( (req,res) => {
    res.send(req.params.nome)
})