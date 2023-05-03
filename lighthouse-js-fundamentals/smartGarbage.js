const smartGarbage = function (trash, bins) {
  // Your code in here ...
  let result = bins;
  result[trash] += 1;
  return result;
  
}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));