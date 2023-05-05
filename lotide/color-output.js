const bashAlert = function(output){
  output = "\x1B[" + "41" + "m" + output + "\x1B[0m";
  return output
}

var output = "Something bad!";
console.log(bashAlert(output))
