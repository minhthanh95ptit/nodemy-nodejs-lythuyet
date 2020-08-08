var express = require('express');

var router = express.Router();


router.get('/',(req, res) =>{
    res.json("router 1 user GET")
})

router.post('/',(req, res) =>{
    console.log(req.body);
    res.json("router 1 user POST")
})

router.put('/',(req, res) =>{
    res.json("router 1 user PUT")
})

router.delete('/',(req, res) =>{
    res.json("router 1 user DELETE")
})

module.exports = router;