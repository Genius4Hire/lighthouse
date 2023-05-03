const bashAlert = function(output){
  output = "\x1B[" + "41" + "m" + output + "\x1B[0m";
  return output
}

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  let result = true;
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("😒");
    return;
  }

  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }

  if (isEqual) {
    console.log("🤌");
  } else {
    console.log("😒");
  }
};


const middle = function(array){
  let result = [];
  if (array.length < 3) {
    result = [];
  } else  if (array.length % 2 === 1){
    result = [array[Math.floor(array.length / 2)]];
  } else {
    result =  array.slice(Math.floor(array.length) / 2 - 1, Math.floor((array.length / 2 + 1)));
  }
  return result;
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]