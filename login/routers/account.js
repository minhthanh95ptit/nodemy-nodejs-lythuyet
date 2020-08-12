const express = require('express');
const router = express.Router();
const AccountModel = require('../models/account')
const PAGE_SIZE = 2;

router.get('/',(req, res, next) =>{
    var page = req.query.page; // "1"
    console.log(page);

    if(page){
        if(page < 1){
            page = 1;
        }
        page = parseInt(page);
        var soLuongBoQua = (page - 1) * PAGE_SIZE;

        AccountModel.find({})
        .skip(soLuongBoQua)
        .limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
        
    }
    else{
        AccountModel.find({})
        .then(data => {
            var tongSoPage = Math.ceil(total/PAGE_SIZE);
            res.json({
                tongSoPage: tongSoPage ,
                data: data
            })
        })
        .catch(err =>{
            res.status(500).json("Error server...")
        })
    }
   
})


router.get('/:id',(req, res, next) =>{
    var id = req.params.id;

    AccountModel.findOne({
        _id: id
    })
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.status(500).json("Error server...")
    })
})

router.post('/',(req, res, next) =>{
    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username
    })
    .then(data =>{
        if(data){
            res.json("Đã tồn tại user này.")
        }
        else{
            return AccountModel.create({
                username: username,
                password: password
            })
        }
    })
    .then(data => {
        res.json("Tạo tài khoản thành công.")
    })
    .catch(err =>{
        res.json("ERROR...")
    })
})

router.put('/:id',(req, res, next) =>{
    var id = req.params.id;
    var password = req.body.password;

    AccountModel.findByIdAndUpdate(id,{
        password: password
    })
    .then(data =>{
        res.json("Đổi mật khẩu thành công")
    })
    .catch(err =>{
        res.json("ERROR...",err)
    })
})

router.delete('/:id',(req, res, next) =>{
    var id = req.params.id;

    AccountModel.findOne({
        _id: id
    })
    .then(data =>{
        if(!data){
            res.json("Tài khoản không tồn tại")
        }
        else{
            return AccountModel.deleteOne({
                _id: id
            })
        }
    })
    .then(data =>{
        res.json("Xóa tài khoản thành công.")
    })
    .catch(err =>{
        console.log("ERROR...")
    })
})

module.exports = router