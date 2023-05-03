const sumLargestNumbers = function(data) {

  let numElements = data.length;
  let largest = 0;
  let secondLargest = 0;
  //console.log(numElements);
  if (numElements < 2) {return null};
  for (let i = 0; i < numElements; i++) {
    if (data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
      //console.log("###############################################");
      //console.log(i);
      //console.log(secondLargest);
      //console.log(largest);
      //console.log(numElements);
    }
  }
  return largest + secondLargest;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));