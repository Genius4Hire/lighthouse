// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Calculates the volume of a sphere given its radius
  return (4 / 3 * PI * radius * radius * radius);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // Calculates the volume of a cone given its radius and height
  return PI * radius * radius * height / 3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Calculates the volume of a prism given its height, width, and depth
  let base = width * depth;
  return height * base;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Calculates the total volume of multiple solids
  let volume = 0;
  for (let i = 0; i < solids.length; i++){
    switch (solids[i].type) {
      case "sphere" : volume += sphereVolume(solids[i].radius); break;
      case "prism"  : volume += prismVolume(solids[i].height, solids[i].width, solids[i].depth); break;
      case "cone"   : volume += coneVolume(solids[i].radius,solids[i].height); break;
      default : return undefined; break;
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);