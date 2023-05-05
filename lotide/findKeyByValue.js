const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const findKeyByValue = function(showsByGenre, nameOfShow) {
  for (let someShow in showsByGenre){
    if (nameOfShow === showsByGenre[someShow]) {
      return someShow;
    }
  }
}





assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);