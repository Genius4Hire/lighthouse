const camelCase = function(input) {
  // Your code here
  cleanString = input.trim();
  let i = "";
  for (let x = 0; x < cleanString.length; x++){
    if (cleanString[x] === " "){
      x++;
      i = i + cleanString[x].toUpperCase();
    } else { 
      i = i + cleanString[x];
    }
  }
  return i;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));