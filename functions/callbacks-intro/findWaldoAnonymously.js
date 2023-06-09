// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {

    names.forEach(name => {
      if (name === "Waldo") {
        found(name);   // execute callback
      }   
    });
   
  }
  

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
    console.log("Found " + index);
  });