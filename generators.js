function* shopping(){
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash
  const stuffFromStore = yield 'cash';
  //walking to laundry place
  const cleanClothes = yield 'laundry';

  //walking back home
  return [stuffFromStore, cleanClothes];

}
//stuff in the store
const gen = shopping(); //"just calling "shopping" doesn't actually invoke any code whatsoever"
gen.next(); // leaving the house, here it enters to the function until yield
// walk into the store
// walking up and down the aisles
// purchase our stuff
// 
gen.next('groceries'); // leaving the store with groceries
gen.next('cleanClothes');

/*Generators with for... of*/

function* colors(){
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen1 = colors();
gen1.next();

const myColors= [];

for(let color of colors()){
  myColors.push(color);
};

myColors;

/*Engenieering team */
/*Delegation generators: when we need to delegate generators that we need to run at the same time*/
const testingTeam = {
  lead:'Amanda',
  tester:'bill',
  [Symbol.iterator]: function*(){
    yield this.lead;
    yield this.tester;
  },
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for(let name of engineeringTeam){
  names.push(name);
}
names;

//Generators with recursion
class Comment {
  constructor(content, children){
    this.content = content;
    this.children= children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    //Array helpers like map or forEach DO NOT work with generators!
    for(let child of this.children){
      yield* child;
    }
  }
}

const children = [
  new Comment ('good comment', []),
  new Comment ('bad comment', []),
  new Comment ('meh', [])  
];

const tree = new Comment('Great post!', children);
const values = [];
for(let value of tree){
  values.push(value);
}
values;