use includes() method?
You can use the includes() method in JavaScript to check if an item exists in an array. You can also use it to check if a substring exists within a string. It returns true if the item is found in the array/string and false if the item doesn't exist.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");



const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}



// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


define a javascript class called wizard the has keys that describe what a wizard needs for an adventure.



class Wizard {
  constructor(name, magicLevel, spellbook, wand) {
    this.name = name;
    this.magicLevel = magicLevel;
    this.spellbook = spellbook;
    this.wand = wand;
  }
  
  castSpell() {
    console.log("Magic spell is being cast!");
  }

  increaseMagicLevel() {
    this.magicLevel++;
  }
}