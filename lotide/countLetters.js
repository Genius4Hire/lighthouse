const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence){
  count = {};
  for (let letter of sentence){
    if (letter in count) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }

  return count;
}


console.log("letter count: ",countLetters("lighthouse in the house"))