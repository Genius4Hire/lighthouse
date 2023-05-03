const getIngredients = function(recipe){
  // Declare empty list array
  let list = [];
  
  // Loop over recipe ingredients and add them to the list
  for (x = 0; x < recipe.ingredients.length; x++){
    list.push(recipe.ingredients[x])
  }
  return list;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  //Loop through each recipe 
  for (let i = 0; i < recipes.length; i++){
    
    // Set matchA and matchB to false initially 
    let matchA = false;
    let matchB = false;
    
    // Get an array of ingredients for this recipe 
    ingredients = getIngredients(recipes[i]);
    
    // Loop through all bakeryA ingredients
    for (let x = 0; x < bakeryA.length; x++){
      // Match if ingredients array includes a bakeryA ingredient 
      if (ingredients.includes(bakeryA[x])){
        matchA = true;
      }
    }
    // Loop through all bakeryB ingredients
    for (let x = 0; x < bakeryB.length; x++){
      // Match if ingredients array includes a bakeryB ingredient 
      if (ingredients.includes(bakeryB[x])){
        matchB = true;
      }
    }
    
    // If both A and B matches, return the name of the recipe 
    if (matchA && matchB) {
      return recipes[i].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));