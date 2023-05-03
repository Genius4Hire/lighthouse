/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 110.13;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE


let wSize = "";
let lSize = "";
let sSize = "";

switch (true){
  case (shirtWidth < 20) :  wSize = "S"; break;
  case (shirtWidth < 22) :  wSize = "M"; break;
  case (shirtWidth < 24) :  wSize = "L"; break;
  case (shirtWidth < 26) :  wSize = "XL"; break;
  case (shirtWidth < 28) :  wSize = "2XL"; break;
  default                :  wSize = "3XL";
}

switch (true){
  case (shirtLength < 29) :  lSize = "S"; break;
  case (shirtLength < 30) :  lSize = "M"; break;
  case (shirtLength < 31) :  lSize = "L"; break;
  case (shirtLength < 33) :  lSize = "XL"; break;
  case (shirtLength < 34) :  lSize = "2XL"; break;
  default                 :  lSize = "3XL";
}

switch (true){
  case (shirtSleeve < 8.38)  :  sSize = "S"; break;
  case (shirtSleeve < 8.63)  :  sSize = "M"; break;
  case (shirtSleeve < 8.88)  :  sSize = "L"; break;
  case (shirtSleeve < 9.63)  :  sSize = "XL"; break;
  case (shirtSleeve < 10.13) :  sSize = "2XL"; break;
  default                 :  sSize = "3XL"; 
}

if ((wSize === lSize) && (lSize === sSize)) {console.log(wSize)} else {console.log("NA")}
//console.log(wSize + " / " + lSize + " / " + sSize);

