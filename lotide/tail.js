const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  let result = data;
  let arrayLen = data.length;
  if (arrayLen > 2) {
    result = result.slice(1,arrayLen);
  }
  return result;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// Test Case: Check the original array
assertEqual(words.length, 3); // original array should still have 3 elements!