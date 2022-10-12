//ES5
var expense = {
  type: 'business',
  amount:'$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//ES6
const { type, amount } = expense;
type;
amount;

//Destructuring arguments object
var savedFile = {
  extension:'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file){
  return `The file ${file.name} of type .${file.extension}, has a size of ${file.size}.`;
}

//ES6
function fileSummaryES6({ name, extension, size }){
  return `The file ${name}, of type .${extension}, has a size of ${size}`;
}

//if I want to add a new parameter, I can do so, like this:
fileSummaryES6(savedFile, {color: 'red'});
//adding to the function the param as destructured argument

function fileSummaryES6({ name, extension, size}, {color}){
  return `Adding a ${color} color to our ${name} file, of ${extension} extension and size of ${size}.`
}



const companies =[
  'Google',
  'Facebook',
  'Uber'
];
// destructuring arrays: gives us individual elements
const [ name ] = companies; //Google
const [ name1, name2] = companies; //Google, Facebook (instead of calling by index)

//if I try to destructure an array with {name}, it literally will take the property 'name' in this case of off the array companies
//Destructure a property: {}
//Destructure an element: []

//mixing destructuring with spread operator

const [prop, ...rest] = companies;

prop;
rest;

//Destructuring arrays and objects at the same time

const companiesCity = [
  { name: 'Google', city:'Montain view'},
  { name: 'Facebook', city:'Menlo Park'},
  { name: 'Uber', city: 'San Francisco'}
];

// const [city] = companiesCity;
city; //{name: 'Google', city: 'Montain view'}

//accessing to the property of 1st element in the array
const [{city}] = companiesCity;
city; //'Montain view'

//OBJECTS

const Google = {
  locations:['Mountain View','New York','London']
};

const { locations: [location] } = Google; 
location;

// destructuring a function with parameters

function signup(username,password,email, birthDate, city){
  // create new user
}
//normally
signup('myusername','mypassword','email@email.com', '1/11/1990', 'Bogotá');

//destructured

const user = {
  username:'myusername',
  password: 'mypassword',
  email: 'email@email.com',
  birthDate: '1/11/1990',
  city: 'Bogotá'
};
//if I destructure the arguments into the function using {}, I'm giving flexibility to call the function using any order of parameters.

function signup( {username,password,email, birthDate, city} ){
  // create new user
}
signup(user);

//Destructuring arrays

const points =[
  [4, 5],
  [10, 1],
  [0,40]
];

//destructuring in the argument list
points.map(([ x, y]) =>{
  return { x, y }; // x:x, y:y
});

//Destructuring in Practice
// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?


const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

//refactor
const profile1 = {
  title: 'Engineer',
  department: 'Engineering'
};

const {title, department} = profile1;

function isEngineer({title,department}) {
  return title === 'Engineer' && department === 'Engineering';
}

/*Array Destructuring in Practice
The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]*/

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

classesAsObject;

//refactor

const classesAsObject = classes.map(([subject,time,teacher]) => {
    return {subject, time, teacher};
});

/*
Recursion with Destructuring
This one is probably the hardest exercise in the entire course!  

Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?
*/

//the map way
const numbers1 = [1, 2, 3];

function double() {
    return numbers1.map(number => number*2);
}

//hard way

const numbers = [1, 2, 3];

const [number1, ...rest1] = numbers;

function double() {
    let arrayNumbers = [];
    for(let number of numbers){
        let doubled = number*2;
        arrayNumbers.push(doubled);
    } return arrayNumbers;
}

//teacher's solution

const numbers2 = [1, 2, 3];

function double([head, ...rest]) {
  if (!head) {
    return [];
  }

  return [2 * head, ...double(rest)];
}