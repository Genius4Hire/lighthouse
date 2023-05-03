const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let numInstructors = instructors.length; 
  //watch for empty list objects
  if (numInstructors === 0 ) {
    return undefined;
  }

  let objLongestName = instructors[0];
 
  if (numInstructors < 2) {
    return objLongestName;
  }

  for (i = 1; i < numInstructors; i++){
    if (instructors[i].name.length > objLongestName.name.length){
      objLongestName = instructors[i]
    }
  }

  return objLongestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));