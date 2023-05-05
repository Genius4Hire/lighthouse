// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
//  for (let i = 0; i < names.length; i++) {
//    for (let name in names) {}
  names.forEach(name => {
    if (name === "Waldo") {
      found(name);   // execute callback
    }   
  });
 
}


const actionWhenFound = function(index) {
  console.log("Found " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);