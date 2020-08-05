const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodemy',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    age: Number
},{
    collection: 'Account'
});

const AccountModel = mongoose.model('account', AccountSchema);

AccountModel.updateMany({
    username: 'loc',
},{
    password: '123456'
})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})
