const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};


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
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) { 
  //console.log(Object.keys(object1));
  const obj1list = Object.keys(object1);
  const obj2list = Object.keys(object2);
  // console.log("k1",Object.keys(object1))
  // console.log("k2",Object.keys(object2))
  obj1list.sort();
  obj2list.sort();
  // console.log("--------------------")
  // console.log("k1",Object.keys(object1))
  // console.log("k2",Object.keys(object2))
  return eqArrays(obj1list,obj2list);
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject),true)
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false)
