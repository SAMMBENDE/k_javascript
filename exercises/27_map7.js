var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2 = arr.map(function(P){
    var fName = P.firstName + ' ' + P.surname;
    var obj = {
        fullName: fName
    };
    return obj;
}); 
console.log(arr2);