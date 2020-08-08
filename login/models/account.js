const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/account',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

AccountSchema = new Schema({
    username: String,
    password: String
},{
    collection: 'Account'
})

AccountModel = mongoose.model('Account', AccountSchema);

// AccountModel.create({
//     username : 'kid1412ubqn',
//     password: 'thanhkid'
// })
// .then(
//     console.log("DONE")
// )
// .catch(err => {
//     console.log(err);
// })

module.exports = AccountModel;