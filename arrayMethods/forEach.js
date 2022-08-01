//this function is called once for each element inside the array
let colors = ['red', 'blue','green'];

colors.forEach(function(color) {

console.log(color);

});

// create an array of numbers

let numbers = [1,2,3,4,5];

// variable that holds the sum

let sum = 0;

// External function

function adder (number){

   sum += number;

}

// Loop over the array
numbers.forEach(function (number){
sum += number;

});

// OR (adder is only pointing to the function, NOT executing it, because it
// will cause that the result of the function will be the parameter inside the forEach and the loop will not be completed.

numbers.forEach(adder);

//EXERCISE
// The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
    areas.push(image.height*image.width);
});