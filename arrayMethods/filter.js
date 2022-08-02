let products = [   
  {name:'banana', type:'fruit'},
  {name:'cucumber', type:'vegetable'},
  {name:'orange', type:'fruit'},
  {name:'celery', type:'vegetable'}
];

let filtered = [];
//Filter doesn't need an if to return a truthy or falsy value. The method itself returns it!
products.filter(function (product) {
  //Return returns a truthy or a falsy value
  return product.type === 'fruit';
});

//Comments for post
let post = { id:4, title: 'New Post' };
let comments = [
  { postId:4, content:'awesome post' },
  { postId:3, content:'it was ok' },
  { postId:4, content:'neat' },
];

function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}

commentsForPost(post,comments);

//Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

//Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(user => {
    return user.admin === true;
});

// This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.


// For example:

// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//   return number > 15;
// }); 
// lessThanFifteen // [ 10 ];

var numbers = [10, 20, 30];


function reject(array, iteratorFunction) {
    return numbers.filter(number => {
        return number < 15;
    });
  
}

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

lessThanFifteen;