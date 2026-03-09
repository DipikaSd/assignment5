1. What is the difference between var, let, and const?

-In JavaScript, var, let, and const are used to declare variables.

-var is the older way of declaring variables. It is function-scoped and can be redeclared and updated.

-let is block-scoped, which means it only works inside the block where it is defined. It can be updated but cannot be redeclared in the same scope.

-const is also block-scoped, but its value cannot be changed after it is assigned.


2. What is the spread operator (...)?

The spread operator (...) is used to expand elements of an array or object. It allows us to copy or combine arrays and objects easily.

Example:
*/js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

3. What is the difference between map(), filter(), and forEach()?

These three methods are used to work with arrays.

-map() is used to create a new array by applying a function to every element of the original array.

-filter() is used to create a new array that contains only the elements that match a specific condition.

-forEach() is used to loop through an array and perform an action for each element, but it does not return a new array.

Example:

const numbers = [1,2,3,4];

numbers.map(n => n * 2);
numbers.filter(n => n > 2);
numbers.forEach(n => console.log(n));

4. What is an arrow function?

An arrow function is a shorter way to write functions in JavaScript. It was introduced in ES6 and uses the => syntax.

Example:

const add = (a, b) => {
 return a + b;
};

5. What are template literals?

Template literals are a way to write strings in JavaScript using backticks ( ). They allow us to insert variables inside strings using ${}.

Example:

const name = "Dipika";
console.log(`Hello, my name is ${name}`);