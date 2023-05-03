/*function range(start, end, step) {
  let output = [];
  if ((start != undefined) && (end != undefined) && (step != undefined) && (start < end) && (step > 0)) {
    for (let i = start; i <= end; i += step){
      output.push(i);
    }
  }
  return output;
}
*/

const range = function (start, end, step) {
  const myRange = []
  current = start
  while (current <= end) {
    myRange.push(current)
    current = current + step
 }
 return myRange
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3))

console.log(range(-5, 2, 30))
console.log(range(-5, -2, 3))
console.log(range(-5, 2, 0))
