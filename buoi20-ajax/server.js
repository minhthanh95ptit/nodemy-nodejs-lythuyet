const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

var obj = {
    username: 'sang',
    password: 'sang1999'
}

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname,'./login.html'))
})

app.get('/haha', (req,res) =>{
    res.sendFile(path.join(__dirname, "./haha.html"))
})
app.post('/login', (req,res) =>{
    var username = req.body.username;
    var password = req.body.password;


    if(username === obj.username && password === obj.password){
        return res.json({
            username: username,
            password: password,
            error: false,
            message: "Đăng nhập thành công"
        })
    }
    else{
        return res.json({
            username: username,
            password: password,
            error: true,
            message: "Sai tài khoản hoặc mật khẩu"
        })
    }
})

app.listen(3000, (req, res) =>{
    console.log("RUNNING...")
})