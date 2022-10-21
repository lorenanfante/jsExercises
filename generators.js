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