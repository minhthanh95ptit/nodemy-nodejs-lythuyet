const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodemy',{
    useNewUrlParser: true,
    
});

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: String,
    card:{
        type: String,
        ref: 'Card'
    },
    course:{
        type: String,
        ref: 'Course'
    }
},{
    collection: 'Account'
})

var CardSchema = new Schema({
    bank: String
},{
    collection: 'Card' //Model
})

var CourseSchema = new Schema({
    name: String,
    teacher:{
        type: String,
        ref: 'Account'
    },
    address: String
},{
    collection: 'Course'
})

var AccountModel = mongoose.model('Account',AccountSchema);
var CardModel = mongoose.model('Card',CardSchema);
var CourseModel = mongoose.model('Course',CourseSchema);

AccountModel.find({})
.populate('card') // trường nào thôi, chứ k phải Schema hay Model
.populate('course')
.populate({
    path: 'course',
    populate:{
        path: 'teacher'
    }})
.then(data =>{
    console.log(data)
})
.catch(err =>{
    console.log(err)
})