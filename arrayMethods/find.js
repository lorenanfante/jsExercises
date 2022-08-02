//find finishes its work when the FIRST element of the array that fulfill the given conditions is found. It ignores if there are more elements with those conditions.
let users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
];

users.find(user => {
  return user.name === 'Alex';
});

//POO
function Car (model){
  this.model = model;
}

let cars = [
  new Car ('Buick'),
  new Car ('Camaro'),
  new Car ('Focus')
]

cars.find(car => {
  return car.model === 'Focus';
});

//posts

let posts = [
  {id: 1, title: 'New Post'},
  {id:2, title: 'Old post'}
];

let comment = { postId: 1, content: 'Great Post!' };

function commentForPost(posts, comment){
  return posts.find(post => {
     return post.id === comment.postId;
    });
}

commentForPost(posts, comment);

//Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
let usersw = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = usersw.find(user => {
    return user.admin === true;
});

//Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => {
    return account.balance === 12;
});

// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


// Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

// In summary:

// var ladders = [
//   { id: 1, height: 20 },
//   { id: 3, height: 25 }
// ];

// findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

// Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].


let ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    return ladders.find( ladder => {
        return ladder.height === criteria.height;
    });
  
}

findWhere(ladders, { height: 25 });