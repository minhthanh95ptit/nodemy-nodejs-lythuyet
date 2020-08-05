var express = require('express');

var app = express();

app.get('/', (req, res) =>{
    res.json("Hello world")
})

app.get('/user', (req, res) =>{
    res.json("Hello 122")
})

app.get('/family', (req, res) =>{
    res.json("Hello Family")
})


app.listen(3000, ()=>{
    console.log('Start...')
})