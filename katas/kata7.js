const checkAir = function (samples, threshold) {
  // Code here!
  let numDirty = 0;
  for (let x = 0; x < samples.length; x++) {
    if (samples[x] === "dirty") {
      numDirty++;
    }
  }
  if (numDirty / samples.length > threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }
};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))