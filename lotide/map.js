
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
}

const words = ["ground", "control", "to", "major", "tom"];
const firstLetters = ["g","c","t","m","t"];
const whoohoo = ['groundwhoohoo','controlwhoohoo','towhoohoo','majorwhoohoo','tomwhoohoo'];
const abrev = [ 'gd', 'cl', 'to', 'mr', 'tm' ];



const map = function(array, callback) {

  //console.log("Array: ", array);
  //console.log("Callback: ", callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


let results = [];

results = map(words, word => word[0]);
console.log(results);
assertArraysEqual(results, firstLetters)

results = map(words, word => word + "whoohoo");
console.log(results);
assertArraysEqual(results, whoohoo)

results = map(words, word => word[0] + word[word.length -1]);
console.log(results);
assertArraysEqual(results, abrev)

