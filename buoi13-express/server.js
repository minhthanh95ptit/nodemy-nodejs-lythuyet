var express = require('express');
var path = require('path');

var app = express();
//GET LOGIN
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'login.html'));
})
//POST LOGIN
app.post('/login', (req, res, next) =>{
    var username = req.body.username;
    var password = req.body.password;

    
})

app.listen(3000, ()=>{
    console.log('Start...')
})