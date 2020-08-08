var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router1 = require('./apiRouter')

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())


app.use('/admin/api/v1/', router1)

app.listen(3000, () => {
    console.log('Server started on port')
})