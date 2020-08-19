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

function checkLogin(req, res, next){
        try{
            var token = req.cookies.token;
            var check = jwt.verify(token, 'mk')
            if(check){
                next()
            }
            else{
                res.json("Vui lòng đăng nhập")
            }
        }
        catch(err){
            return res.redirect('/login');
        }
}

function checkStudent(req, res, next){
    try{
        var token = req.cookies.token;
        var data = jwt.verify(token, 'mk');

        AccountModel.findOne({
            _id: data._id
        })
        .then(data =>{
            if(data.role >= 0){
                next();
            }
        })
        
    }
    catch(err){
        return res.redirect('/login');
    }
}

function checkTecher(req, res, next){
    try{
        var token = req.cookies.token;
        var data = jwt.verify(token, 'mk');

        AccountModel.findOne({
            _id: data._id
        })
        .then(data =>{
            if(data.role >= 1){
                next();
            }
            else{
                res.json("Tài khoản của bạn chưa được cấp quyền")
            }
        })
        
    }
    catch(err){
        return res.redirect('/login');
    }
}

function checkAdmin(req, res, next){
    try{
        var token = req.cookies.token;
        var data = jwt.verify(token, 'mk');

        AccountModel.findOne({
            _id: data._id
        })
        .then(data =>{
            if(data.role === 2){
                next();
            } else{
                res.json("Tài khoản của bạn chưa được cấp quyền")
            }
        })
        
    }
    catch(err){
        return res.redirect('/login');
    }
}

app.get('/student', checkLogin,checkStudent,(req, res, next) =>{
    res.json('Wellcome')
})

app.get('/teacher', checkLogin,checkTecher,(req, res, next) =>{
    res.json('Wellcome')
})

app.get('/admin', checkLogin,checkAdmin,(req, res, next) =>{
    res.json('Wellcome Admin')
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