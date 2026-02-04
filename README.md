3.The call() method immediately invokes the function with a given this value and arguments passed one by one. It is generally used when we want to call a function right away with a different object as its context.
function greet(city) {
  console.log(this.name + " lives in " + city);
}
let user = { name: "Aman" };
greet.call(user, "Delhi");

In the above example, call() executes the greet function immediately and sets this to the user object.

On the other hand, the bind() method does not execute the function immediately. Instead, it returns a new function with this permanently bound to the given object. The returned function can be called later.
let boundGreet = greet.bind(user, "Delhi");
boundGreet();


4.The arguments object is an array-like object that is available inside all non-arrow functions.
It stores all the values passed to a function, even if the function parameters are not defined.
(a) arguments.length
The length property returns the total number of arguments passed to the function.
function show() {
  console.log(arguments.length);
}

show(10, 20, 30);   // 3

(b)ndexed values (arguments[ ])

Arguments can be accessed using index numbers, just like an array. Indexing starts from 0.

function show() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

show("A", "B");

(c)The arguments object looks like an array but it is not an actual array. It does not support array methods like push(), pop(), or map() directly.

function show() {
  console.log(typeof arguments);   // object
  // arguments.push(10); //error
}

show(1, 2);


7.Various array methods are as follows --> 
The forEach() method executes a function once for each element in the array.
It is used only for iteration and does not return anything.

let arr = [1, 2, 3];

arr.forEach(function (value) {
  console.log(value);
});

2.The map() method creates a new array by applying a function to every element of the original array.
The original array remains unchanged.

let arr = [1, 2, 3];

let result = arr.map(function (value) {
  return value * 2;
});

console.log(result); // [2, 4, 6]

3.The filter() method returns a new array containing only those elements that satisfy a given condition.

let arr = [1, 2, 3, 4];

let evenNumbers = arr.filter(function (value) {
  return value % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

4.reduce()

The reduce() method reduces all array elements into a single value such as sum, product, or maximum value.

let arr = [1, 2, 3, 4];

let sum = arr.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

console.log(sum); // 10

5.some()

The some() method checks whether at least one element in the array satisfies a condition.
It returns true or false.

let arr = [10,20,30]

let result = arr.some(function (value) {
  return value > 25;
});

console.log(result); // true
