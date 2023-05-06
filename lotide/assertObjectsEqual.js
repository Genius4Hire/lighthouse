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
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false
const eqObjects = function(object1, object2) { 
  const obj1list = Object.keys(object1);
  const obj2list = Object.keys(object2);
  obj1list.sort();
  obj2list.sort();
  return eqArrays(obj1list,obj2list);
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`🤌: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😒 : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject),true);
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject),false)
