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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    let currentLetter = sentence[i];
    if (results[currentLetter]){
      results[currentLetter].push(i)
      console.log(results[currentLetter]); 
 
    } else {
      results[currentLetter] = [i];
    }

  }
  delete results[' ']; //remove space count
  return results;
};

console.log(letterPositions("hello"))

assertArraysEqual(letterPositions("hello").e, [1]);