const jwt = require('jsonwebtoken');

var data = { username: 'nodemy'};

jwt.sign(data, 'nodemy12345',{ //nodemy12345 -> ma bi mat
    expiresIn: 30 //tgian song cua token
}, function(err, data){
    console.log('data', data)
});

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vZGVteSIsImlhdCI6MTU5NzgwNTU2MywiZXhwIjoxNTk3ODA1NTkzfQ.iPAI1mZguSM2VRlAGL_mu8mmlbBG79EzppRMgX4wOXs";

var ketqua = jwt.verify(token, 'nodemy12345')