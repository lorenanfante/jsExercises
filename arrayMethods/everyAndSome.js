// every element is evaluated and got a result (true/false). Then all those "partial" results are compared with an && operator, to return a final result (true/false)

let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Lenovo', ram: 32 },
];

computers.every(computer => {
  return computer.ram > 16;
});

// with some, the 'partial' values are evaluated with an OR comparator. So, if there's any TRUE partial result, the return will be TRUE

computers.some(computer => {
  return computer.ram > 16;
});


// Emulating inputs with classes

function Field (value){
  this.value = value;
}

let username = new Field ('Lorencia');
let password = new Field ('ola k ase2');
let birthDate = new Field ('10/10/2010');

Field.prototype.validate = function(){
  return this.value.length > 0;
}

// username.validate();
//in order to validate if all fields are filled
//create an array that contains all the input data

let fields =[username, password, birthDate];

let formIsValid = fields.every( field => {
  return field.validate();
});

console.log(formIsValid);

//validating on the frontend

if (formIsValid) {
  console.log('success!');
} else {
  console.log('error');
}


//another exersice
// Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every( user => {
    return user.hasSubmitted === true;
});

hasSubmitted;

//another more
// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => {
    if (request.status === 'pending'){
        request.status = true;
    }
    return request.status;
});

inProgress;