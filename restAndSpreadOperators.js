/*Spread operators*/

const defaultColors = ['red', 'orange'];
const userFavoriteColors = ['green', 'olive'];
const fallColors = ['fire red','fall orange'];

//concat (an option)
//defaultColors.concat(userFavoriteColors);
//SpreadOperators take the elements on the other arrays and join them inside one.
//Spread operators allow to add new items to an array, at the same time as it is joining other arrays' items.
['blue',...fallColors,...defaultColors, ...userFavoriteColors];

/* Mix and match spread operators */

function validateShoppingList(...items){
  if(items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;

}
validateShoppingList('oranges', 'bananas','eggs');

/* rest and spread operators */

const MathLibrary = {
  calculateProduct(...rest){ //assume that the params that will be received are various and bring them all
    console.log('please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a,b){
    return a * b;
  }
}

/* Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
 */

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
//refactor

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}
var numbers = [a,b,c,d,e];

/*Refactor the following to use the spread operator. */
function join(array1, array2) {
  return array1.concat(array2);
}
//refactor
function join(array1, array2) {
    let arrays =[...array1,...array2];
    return arrays;
}
//Refactor the following to use the only the rest operator,
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

//refactor
function unshift(array, ...items) {
  return [...items,...array];
}