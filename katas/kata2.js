const conditionalSum = function(values, condition) {
  // Your code here
  let oddSum = 0;
  let evenSum = 0;
  let numElements = values.length;
  if (numElements < 2) {
    return 0;
  }
  for (let i = 0; i < numElements; i++) {
    if (values[i] % 2 === 0) {
      evenSum += values[i];
    }
    if (values[i] % 2 === 1) {
      oddSum += values[i];
    }
  }

  if (condition === "even") {
    return evenSum;
  }
  if (condition === "odd") {
    return oddSum;
  } 
  return 0;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));