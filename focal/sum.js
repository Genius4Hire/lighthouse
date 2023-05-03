const addParams = function(argumentsArr) {
  return Number(argumentsArr[0]) + Number(argumentsArr[1]);
};
const args = process.argv.slice(2);
console.log(addParams(args));

