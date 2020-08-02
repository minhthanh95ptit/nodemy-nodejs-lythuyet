var person1 = require('./api/demo');

console.log(person1);

var person2 = {
    name: 'Thái',
    age: 12,
    manuFacturer: 'BMW',
    carPrice: 30000
}

if(person1 === person2){
    console.log("2 object bằng nhau");
}
else{
    console.log("2 object khác nhau");
}