const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodemy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: Number
},{
    collection: 'Account'
});

const AccountModel = mongoose.model('Account', AccountSchema);

AccountModel.find({
    age: {$in: [22,25]}
})
.sort('salary')
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})
