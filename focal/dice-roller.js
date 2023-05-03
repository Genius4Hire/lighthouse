const rollD6 = function(rolls){
  let result = [];
  for (let i = 0; i < rolls; i++){
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  return result;
}


let rolls = Number(process.argv[2]);
console.log(`Rolled ${rolls} dice: ${rollD6(rolls)}`);
