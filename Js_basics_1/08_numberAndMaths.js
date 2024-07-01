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


//++++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++

//Math object
//Math object is used to perform mathematical operations
console.log(Math.PI);//3.141592653589793
console.log(Math.abs(-100));//100
console.log(Math.ceil(100.1));//101
console.log(Math.floor(100.9));//100
console.log(Math.round(100.5));//101
console.log(Math.round(100.1));//100
console.log(Math.max(100,200,300));//300
console.log(Math.min(100,200,300));//100
console.log(Math.pow(2,3));//8
console.log(Math.sqrt(16));//4
console.log(Math.random());//0.123456789
console.log(Math.floor(Math.random()*10));//0-9