

const carPassing = function (cars, speed) {
  // Your code in here ...
  let result = cars;
  result.push({ time: Date.now(), speed: speed })
  return result;
}
