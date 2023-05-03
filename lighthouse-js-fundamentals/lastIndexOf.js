function lastIndexOf(data, value){

  if (data.length === 0) {
    return -1;
  }
  if (data.length === 1) {
    if (data[0] == value) {
      return 0;
    }
  }
  let i = data.length - 1;
  while ((data[i] != value) && (i !== 0)){
    i--;
  }
  if (i !== 0) {
    return i;
  } else return -1;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([ 5 ], 5), "=?", 0);

console.log(lastIndexOf([], 3), "=?", -1);