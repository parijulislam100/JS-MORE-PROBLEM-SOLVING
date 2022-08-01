function duplecateRemove(num){
    var unique = [];
    for(const element of num){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

var num = [11,10,11,12,15,12,21,20,22,21];
var singleNumber = duplecateRemove(num);
console.log(singleNumber);