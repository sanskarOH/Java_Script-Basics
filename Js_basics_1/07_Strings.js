//All about Strings in JavaScript

const name = 'John Doe';
const repoCount =  50;

//Concatenation
console.log('My name is ' + name + ' and I have ' + repoCount + ' repositories');
//using template literals
console.log(`My name is ${name} and I have ${repoCount} repositories`);

//Stering declaration
const str = new String('Hello');
//String is an object
console.log(str[0]);