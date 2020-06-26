var arr = [1,2,3,4];


function isEven(num) {
    console.log('num', 'num');
    return num % 2 ===0;
}

var arr2 = arr.map(function(num){
    var evenOrOdd = isEven(num);
    return evenOrOdd;
})
console.log(arr2)