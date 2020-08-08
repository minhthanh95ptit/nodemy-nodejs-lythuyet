const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodemy',{ //defalt port: 27017
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;


const account = new Schema({
    usernmame: String,
    password: String
},{
    collection: 'Account'
});

const AccountModel = mongoose.model('ModelName', account);


AccountModel.create({
    usernmame: 'loc',
    password: 888
}).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})


// AccountModel.find({})
// .then(function(data){
//     console.log('data', data);
// })
// .catch(function(err){
//     console.log('loi',err);
// })

