// inside of arrays of objects:
// - If we have a value:key with the exact same name, the structure behind continues the same, but only one value is written.
// EX:
function createBookShop(inventory){
  return {
    // before
    inventory: inventory,
    inventoryValue: function(){ 
      return hi;
    },
  // after
    inventory,
    inventoryValue: function(){ 
      return hi;
    }
  }
}

//if the value of the key is a function it could eliminate the : and the "function" word.

function createBookShop(inventory){
  return {
    // before
    inventory: inventory,
    inventoryValue: function(){ 
      return hi;
    },
  // after
    inventory,
    inventoryValue(){ 
      return hi;
    },
    anotherMore,

  }
}

//when to use enhanced literals
function saveFile(url, data){
  $.ajax({
    url,
    data,
    method: 'POST',
    //first the objects that have not key-value pair
  });
}

const url ='https://www.google.com';
const data = {color: 'red'};

saveFile(url,data);

//reas
function makeAjaxRequest(url, method = 'GET'){
    //Assignation inside the parameter would replace this:
    // if(!method){
    //     method= "GET";
    // }
    return method;
    // logic to make the request
} 
/*
Null makes the value "hidden" and that's why it's not shown when the function calls.
Undefined, on the other hand, refers to a value not defined. Therefore, the default behaviour of the parameter will be executed.
*/
makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', 'GET');

/*Use cases of defauling arguments */

function User(id){
  this.id = id;
}

function generateId(){
  return Math.random()* 9999;
}

function createAdminUser(user = new User(generateId())){
  user.admin = true;
  return user;
}
const user = new User(generateId());
createAdminUser(user);

/* Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it. */

function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

/*refactor*/
function sum(a=0, b=0) {
  return a + b;
}

/*Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it. */
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

/* Refactor */
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}