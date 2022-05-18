const express = require('express')

const app = express()

app.listen('4001')



app.route('/').get((req,res)=>{res.send('hello')})

app.route('/sobre').get((req,res)=>{res.send('hello sobre')})

