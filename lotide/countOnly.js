const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};


  // allItems: array of all the names we need to count
  // itemsToCount: object defining which names to count
  const countOnly = function(allItems, itemsToCount){
  let result = {};  
  for (let item of allItems) {  
    if (itemsToCount[item]) { //should we count this?
      if (result[item]) {
        result[item] += 1; // already found? bump up the count
      } else {
        result[item] = 1;  // first one? start counting
      }
    }
  }
  return result;
}

// test cases...

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);