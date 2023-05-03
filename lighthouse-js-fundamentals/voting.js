const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  let goodLocations = [];
  for (let i = 0; i <= (stations.length - 1); i++){
    if (stations[i][1] >= 20) {
      if ((stations[i][2] === "school") || (stations[i][2] === "community centre")) {
        goodLocations.push(stations[i][0]);
      }
    }
  }
  return goodLocations;



}

console.log(chooseStations(stations));