const express = require('express')

const app = express()

app.listen('4001')


let author = 'João'


app.route('/:id').delete((req,res) => {
    res.send(req.params.id)
})