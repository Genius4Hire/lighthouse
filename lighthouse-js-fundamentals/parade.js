const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(movesArr){
  let result = [0,0];
  for (let i = 0; i < moves.length; i++){
    switch (movesArr[i]) {
    case "north" : result[1] += 1; break;
    case "south" : result[1] -= 1; break;
    case "west" : result[0] -= 1; break;
    case "east" : result[0] += 1; break;
    }
  }
  return result;
}


console.log(finalPosition(moves));