let numbers = [10,20,30];
let sum;
/*
array.reduce((initialValue,array) =>
  {return initialValue =+ array
  },initialValue);
*/
numbers.reduce((sum,number)=>{
  return sum += number;
},0)

//////colors object array

let colors =[
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'},
];

/*
array.reduce((nameForTheData, array)=> {
  nameForTheData.push(array);
  return nameForTheData;
},dataTypeToReturnInThisCaseIsAnArray);

*/

colors.reduce((previous, colors)=>{
   previous.push(colors.color);
  return previous;
},[]);

//balanced parens

//function that returns if parenthesis are correctly closed (true or false)

function balancedParens(string){
  return !string.split('').reduce(
    function (initValue,char) {
      if(initValue < 0) { return initValue; }
      if(char === '(') { return ++initValue; }
      if(char === ')') { return --initValue; }
      return initValue;
  },0);
};

balancedParens('))))');

//** exercise 1 */

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance =

trips.reduce( (totalDistance,trips) =>{
    totalDistance.push(trips.distance);
    
    return totalDistance;
},[]).reduce((previous, totalDistance)=>{
    return previous += totalDistance;
},0);

/* Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)*/

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
let sitting = 0;
let standing = 0;
var deskTypes = desks.reduce(function(props, desks) {
    if (desks.type === 'sitting'){
        sitting++;
    }else {
        standing++;
    }
    props.sitting = sitting,
    props.standing = standing;
    return props;
}, { sitting: 0, standing: 0 });