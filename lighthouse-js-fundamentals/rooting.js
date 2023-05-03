
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'


const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let index = 0;
  for (let i = 0 ; i < vegetables.length; i++){
    //debugging loop variables
    //console.log(i);
    //console.log(vegetables[i][metric])
    //console.log(vegetables[index][metric])
    //console.log("---------------")
    if (vegetables[i][metric] > vegetables[index][metric]){
      index = i;
    }
  }
  return vegetables[index].submitter
}




console.log(judgeVegetable(vegetables, metric));