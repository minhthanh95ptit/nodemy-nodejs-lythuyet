const express = require('express')
const app = express()
const AccountModel = require('./models/account')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.json("Hello world");
})

app.post('/login', (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username,
        password: password
    })
    .then(data =>{
        if(data){
            res.json("Đăng nhập thành công!")
        }
        else{
            res.json("Đăng nhập thất bại")
        }
    })
    .catch(err => {
        return err;
    })
})


app.post('/register', (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username,
    })
    .then(data =>{
        if(data){
            res.json("Tài khoản này đã tồn tại")
        }
        else{
            return AccountModel.create({ //return thi data ben duoi chinh la kq cua .then ben tren
                username: username,
                password: password
            })
        }
    })
    .then(data => {
        res.json("Tạo tài khoản thành công")
    })
    .catch(err => {
        return err;
    })
})

app.listen(3000, () => {
    console.log('running...');
})