const raisinAlarm = function (cookie) {
  // Put your solution here
  let result = "All good!";
  for (const ingredient of cookie){
    if (ingredient === "🍇") {
      result = "Raisin alert!"
      return result;
    };
  };
  return result;
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log('#############');
console.log(raisinAlarm(["🍫", "🍫", "🍫", "🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫", "🍫", "🍫", "🍫"]));