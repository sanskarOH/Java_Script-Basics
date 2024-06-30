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
console.log(str.__proto__);
//list of methods is printed inn browser
console.log(str.length);
//prints the length of the string
console.log(str.toUpperCase());
//converts the string to uppercase
console.log(str.toLowerCase());
//converts the string to lowercase
console.log(str.indexOf('e'));
//prints the index of the character
console.log(str.lastIndexOf('l'));
//prints the last index of the character
console.log(str.charAt(1));
//prints the character at the index
console.log(str.charCodeAt(1));
//prints the ASCII value of the character
console.log(str.includes('l'));
//checks if the character is present in the string
console.log(str.startsWith('H'));
//checks if the string starts with the character
console.log(str.endsWith('o'));
//checks if the string ends with the character
//substring
console.log(str.substring(0, 3));
//prints the substring
console.log(str.slice(0, 3));
//prints the substring
console.log(str.split(''));
//splits the string into an array
console.log(str.trim());    
//removes the extra spaces
//types of trim
console.log(str.trimStart());
console.log(str.trimEnd());
//replace
//console.log(str.replace('H', 'Y'));


//Always use backtics instead of plus sign for concatenation
//Always use template literals instead of backtics for concatenation
//Always use template literals instead of plus sign for concatenation
