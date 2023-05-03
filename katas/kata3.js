const numberOfVowels = function(data) {
  // Put your solution here
  let elementCount = data.length;
  let vowels = ["a","e","i","o","u"];
  let vowelCount = 0;
  for (i = 0; i < elementCount; i++) {
    if (vowels.includes(data[i])) {
      vowelCount++;
    }
  }
return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));