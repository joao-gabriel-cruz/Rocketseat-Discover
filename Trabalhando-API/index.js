const express = require('express')

const app = express()

app.listen('4001')


// middleware
app.use(express.json())

let author = 'João'

app.route('/').get((req,res) => res.send(author))

app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})