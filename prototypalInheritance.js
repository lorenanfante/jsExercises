/*When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.*/

//example ES5

function Car (options){
  this.title = options.title;
};

Car.prototype.drive = function (){
  return 'vroom';
}

function Toyota (options){
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
  return 'beep';
};

let toyota = new Toyota ({ color:'red', title: 'hello'});

toyota;
toyota.drive();
toyota.honk();

//Using ES6 classes

class Car {
  //constructor executes whenever new Car is called
  /*  a way of creating a constructor is: 
    constructor(options){
     this.title = options.title; 
   }*/
   constructor({ title }){
    this.title = title;
   } //do not use comma between methods inside classes

  drive(){
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options){
    super(options); // Car.constructor();
    this.color = options.color;
  }

  honk(){
    return 'beep';
  }
};

let toyota1 = new Toyota({ color:'red', title: 'Hello' });
'---------';
toyota1.honk();
toyota1;

// let car = new Car({title:'Toyota'});
// car;
// car.drive();

// //Game Classes
// You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

// Initialize the Monster's health to 100.
// The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster

class Monster {
  constructor({name}){
      this.health = 100;
      this.name = name;
  }
  
}

let monster = new Monster({name:'raww'});
monster;

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    bite(snake){
        snake.health -= 10;
    }
}

let snake = new Snake();
snake.bite({name:'nel', health:20});