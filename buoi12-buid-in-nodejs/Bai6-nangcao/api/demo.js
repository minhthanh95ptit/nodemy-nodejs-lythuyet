var test = require('../sum');

console.log("---In ra số lớn hơn 5---")

//Cach 1 - for
for(var i = 0 ;i < test.length ; i++){
    if(test[i] > 5){
        console.log(test[i]);
    }
}

//Cach 2 - filter

console.log(test.filter(function(item){
    return item > 5 ;
}))

console.log("---Thêm phần tử 7 vào trong mảng---")
test.push(7);
console.log(test);


// Số chia hết cho 2
console.log("---Kiểm tra xem mảng có chia hết cho 2 không---")
var check = 0;
for(var i = 0 ;i < test.length ; i++){
    if(test[i] % 2 === 0){
        check = 1;
        break;
    }
}
if(check === 0){
    console.log("Mảng không có số chia hết cho 2");
}
else{
    console.log("Mảng có số chia hết cho 2");
}