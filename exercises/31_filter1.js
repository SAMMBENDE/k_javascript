var arr = ['a', 'b', 'a', 'c', 'a', 'd'];
//var arr2 = letters.filter(letter => {
//    return(letter != 'b', 'c', 'd');
//})

var arr2 = arr.filter(function(arr) {
    if (arr <'b', 'c', 'd') {
        return true;
    };
});


console.log(arr2);



