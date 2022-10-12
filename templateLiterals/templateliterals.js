const device_id= 4; 
const guid= 20;
const username = "holi";

const data = `{ "device_id": "${device_id}", 
                "guid": "${guid}",
                "username": "${username}",
              }`

// Refactor the function to use template strings
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}

//solution
function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}

doubleMessage(2);

//ejercicio 2

function fullName(firstName, lastName) {
  return firstName + lastName;
}

//solución del 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

fullName('Billy','Jean');
