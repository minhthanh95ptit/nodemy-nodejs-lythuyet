var test = require('./api/demo');

console.log(test.length);

var newArr = test.map(function(item){
    return item * 2;
});

console.log(newArr);

