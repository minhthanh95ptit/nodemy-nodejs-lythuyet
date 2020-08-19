const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/account',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

AccountSchema = new Schema({
    username: String,
    password: String,
    role: Number
},{
    collection: 'Account'
})

AccountModel = mongoose.model('Account', AccountSchema);



module.exports = AccountModel;