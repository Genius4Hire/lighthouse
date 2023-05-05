const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
};


const shirtObject = {
  color : "red", 
  size : "medium"
}

const anotherShirtObject = {
  color : "red",
  size : "medium"
}

const longSleeveShirtObject

eqObjects(shirtObject, anotherShirtObject);
eqObjects(shirtObject, longSleeveShirtObject);


}