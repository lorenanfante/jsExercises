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