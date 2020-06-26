var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function(P){
    return P.firstName + ' ' + P.surname;
});
console.log(arr2);