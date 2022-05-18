const express = require('express')

const app = express()

app.listen('4001')


// meddleware

app.use(express.json())


app.route('/').get((req,res) => res.send(req.query.name))

app.route('/').put((req,res) => res.send(req.body.author))

app.route('/:parametro').get( (req,res) => res.send(req.params.parametro))