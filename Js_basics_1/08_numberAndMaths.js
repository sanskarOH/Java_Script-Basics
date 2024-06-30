//Numbers and Maths in JavaScript
//dynamic typing
const score = 100;
console.log(score);

//using Number object
const score1 = new Number(100);
console.log(score1);    

//typeof operator
console.log(typeof score);//number
console.log(typeof score1);//object

//toFixed method
const number = 167676700.123456;
console.log(number.toFixed(2));//100.12
//mainly used for currency on in e-commerce websites

//precision method
console.log(number.toPrecision(2));//1.0e+2
//rounds off the number to the given precision

//to Local String method
console.log(number.toLocaleString('en-IN'));//100.123456
