function swapCase(str) {





// cree une variable
var result = "";

//parcourir le str
for(var i = 0; i < str.length; i++){
 
    if(str[i] === str[i].toUpperCase()){
        result += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase(); 
        return result;
    }
}

}
 

console.log(swapCase("Hello World"));