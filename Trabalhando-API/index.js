const express = require('express')
const axios = require('axios')

const app = express()

app.listen('4001')

app.route('/').get( (req,res) =>{
    axios.get('https://api.github.com/users/joao-gabriel')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(err => console.log(err))
})

