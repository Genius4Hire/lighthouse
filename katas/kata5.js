const urlEncode = function(text) {
  // Put your solution here
  let preppedText = text.trim();
  let newString = "";
  for (let i = 0; i < preppedText.length; i++){
    // prevent mutation with a temp string
    let tempString = "";
    if (preppedText[i] === " ") {
      tempString = newString + "%20";
    } else {
      tempString = newString + preppedText[i]
    }
    newString = tempString;
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));