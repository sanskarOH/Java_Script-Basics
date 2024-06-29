//Categorization of data types in JavaScript
//1. Primitive data types
//Examples of primitive data types are:
//Boolean
//Null
//Undefined
//Number
//String
//Symbol
const id = Symbol('1234');
const anotherId = Symbol('1234');
console.log(id === anotherId); // false
console.log(id); // Symbol(1234)
//BigInt
//2. Non-primitive data types
//Examples of non-primitive data types are:
//Object
//Array
//Function
//Date
//RegExp
//Difference between primitive and non-primitive data types:
//The categorization is based on the memory allocation of the data types.
//Primitive data types are stored in the stack memory
//Non-primitive data types are stored in the heap memory
//Primitive data types are immutable
//Non-primitive data types are mutable
//Primitive data types are predefined by the JavaScript
//Non-primitive data types are user-defined data types
//Primitive data types are passed by value
//Non-primitive data types are passed by reference
//Primitive data types are copied by value
//Non-primitive data types are copied by reference
//Primitive data types are faster than non-primitive data types
//Non-primitive data types are slower than primitive data types
//Primitive data types are independent of each other    
//Non-primitive data types are dependent on each other
