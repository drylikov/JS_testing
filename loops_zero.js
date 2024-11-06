function program(input) {
    // input
    // write code here
    // return output
    if (input == 0){
        return "0"
    }
    else{
        var a
    var output = input
     for (a= input - 1 ; a>0; a--){
       output = output + '\n' + a
     }
     output = output + '\n' + 0
     return output
}}


module.exports = program