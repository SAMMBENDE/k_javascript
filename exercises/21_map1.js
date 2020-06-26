var arr = [1,2,3,4]
console.log(arr);
var arr2 = arr.map(x => x + 1);
var arr3 = arr.map(function(num){
    return num+2;
});
console.log(arr2);
console.log(arr3);