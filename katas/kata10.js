// Function to add whitespace padding to individual numbers in the multiplication table
function padNum(num, size) {
  // Convert the number passed as an argument to a string
  num = num.toString();
  // Create a while loop to add padding until the desired size is reached
  while (num.length < size) num = " " + num;
  // Return the padded number
  return num;
}

const multiplicationTable = function(maxValue) {
  // Initialize an empty array to store each row of data from the multiplication table
  let table = [];
  // Iterate through each row and calculate the results using a nested for loop
  for (let y = 0; y < maxValue; y ++){
    let row = [];
    for (let x = 0; x < maxValue; x ++){
      row.push((x+1)*(y+1));
    }
    table.push(row);
  }

  // Get the length of the largest number in the multiplication table (and +1 to separate them)
  let digits = table[maxValue-1][maxValue-1].toString().length + 1; 
  // Initialize an empty string to store the concatenated values of each row
  let rowString = "";
  // Iterate through each row and concatenate the values, adding whitespace padding for each value
  for (let y = 0; y < maxValue; y ++){
    rowString = "";
    for (let x = 0; x < maxValue; x ++){
      rowString += padNum(table[x][y],digits);
    }
    // Print out the rowString to the console
    console.log(rowString);
  }
  // Return something empty
  return "";
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(100));
console.log(multiplicationTable(1000)); // fun to look at when piped text file!!