const express = require('express')
const app = express()
const AccountModel = require('./models/account')
const bodyParser = require('body-parser')
const accountRouter = require('./routers/account')
const path = require('path');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))


app.use('/api/account/', accountRouter)

app.get('/', (req, res) =>{
    res.json("Hello world");
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'login.html'))
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
            console.log(data._id)
            var token = jwt.sign({
                _id: data._id
            }, 'mk')
            return res.json({
                message: 'Thành công',
                token: token
            })
        }
        else{
            return res.json("Đăng nhập thất bại")
        }
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/private', (req, res, next) =>{
    try{
        var token = req.cookies.token;
        var check = jwt.verify(token, 'mk')
        if(check){
            next()
        }
    }
    catch(err){
        return res.redirect('/login');
    }
},(req, res, next) =>{
    res.json('Wellcome')
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