function program(input) {
    // input
    // write code here
   
    
    if (input == 0){
        return "0"
    }
    else{
        var a
    var output = "0"
     for (a= 1 ; a<input+1; a++){
       output = output + '\n' + a 
     }
     
     return output
}}



module.exports = program