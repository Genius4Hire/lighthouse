const repeatNumbers = function(data) {
  // Put your solution here
  let tempString = "";
  let output = [];
  for (let x = 0; x < data.length; x++){
    tempString = '';
    for (let y = 0; y < data[x][1]; y++) {
      tempString += data[x][0].toString();
    }
    output.push(tempString);
  }
  return output;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
