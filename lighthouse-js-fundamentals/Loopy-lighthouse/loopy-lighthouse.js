//define inclusive range of loop
let count = 100;
let endCount = 200;
let mod3 = 0;
let mod4 = 0;

for (let i = count;i <= endCount; i++){
  //determine what factors
  mod3 = i % 3;
  mod4 = i % 4;
  if (mod3 == 0 && mod4 == 0) {
    console.log("LoopyLighthouse")
  } else if (mod3 == 0) {
    console.log("Loopy")
  } else if (mod4 == 0) {
    console.log("Lighthouse")
  } else console.log(i)
}