const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("same", "different");
assertEqual(0, 1);
assertEqual(1, 1);
