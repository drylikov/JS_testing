function program(input) {
    // input
    // write code here
    // return output
    if(input==0){
    return "NO"
}

    var output="1"
    for(i=2;i<input;i++){
        if(i%2!=0){
            output=output + '\n' + i
        }
    }
    return output
   
}




module.exports = program
