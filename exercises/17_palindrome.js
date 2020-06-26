function isPalindrome(str) {
    var arr = str.split('');
    for( i=0; i<arr.length; i++){
        if(arr[i]==''){
            arr[i].splice(i,1);
        }
    }
}
var isEqual = false;
var j = 0
var k = arr.length -1;
    if(arr[j] != arr[k])
    return false    
