let score = "100";

console.log(typeof score);//to log the type of the variable
console.log(typeof(score))

//converting string to number
let scoreNum = Number(score)
console.log(scoreNum, typeof scoreNum)


//what if we have a string like "100px"
let scorePx = "100px";
let scoreNumPx = Number(scorePx)
console.log(scoreNumPx, typeof scoreNumPx)//it will return NaN because it is not a valid number

//what if we have null
let nullScore = null;
let nullScoreNum = Number(nullScore)
console.log(nullScoreNum, typeof nullScoreNum)//it will return 0 because null is 0

//what if we have undefined
let undefinedScore = undefined;
let undefinedScoreNum = Number(undefinedScore)
console.log(undefinedScoreNum, typeof undefinedScoreNum)//it will return NaN because undefined is not a valid number

//for boolean
let boolScore = true;
let boolScoreNum = Number(boolScore)
console.log(boolScoreNum, typeof boolScoreNum)//it will return 1 because true is 1 and false is 0
//convertin number to boolean
let num = 0;
let numBool = Boolean(num)
console.log(numBool, typeof numBool)//it will return false because 0 is false and 1 is true
//"" is false and " " is true OR "HELLO" is true
//number to string
let numb = 100;
let numStr = String(numb)
console.log(numStr, typeof numStr)//it will return 100 as string


//++++++++++++ OPERATIONS ++++++++++++++++++

let value = 3;

let negVal = -value
console.log(negVal);

// console.log(3 + 3);//addition
// console.log(3 - 3);//subtraction
// console.log(3 * 3);//multiplication
// console.log(3 / 3);//division
// console.log(3 % 3);//modulus
// console.log(3 ** 3);//exponential

let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2);//concatenation


//Complex Situtations

console.log(3 + "3");//it will return 33 because it will convert 3 to string and then concatenate
console.log("3"+3);//it will return 33 because it will convert 3 to string and then concatenate
console.log(3 +"3" +3);//it will return 333 because it will convert 3 to string and then concatenate

console.log(3 - "3");//it will return 0 because it will convert 3 to number and then subtract
console.log("3"-3);//it will return 0 because it will convert 3 to number and then subtract
console.log(3 +3+"3");//it will return 63 because it will convert 3 to number and then add and then concatenate

console.log(3+4-7*6/7)//this is suitable for exams but not for real world applications
//this practice is not good because it is not readable and is not appreaciated in real world applications
//noone will understand this code and will return all pull requests

//special type conversion or tricky type conversion
console.log(true);
console.log(+true);//it will return 1 beacuse it will convert true to number but is not good practice
console.log(+"");//it will return 0 because it will convert "" to number but is not good practice


let num1 , num2;
num1 = num2 = 3;
//not a good practice as no one will understand this code


let gameScore = 100;
let finalScore = gameScore++;
console.log(finalScore, gameScore)//it will return 100, 101 because it will first assign the value and then increment
//Prefix and Postfix
let gameScore1 = 100;
let finalScore1 = ++gameScore1;
console.log(finalScore1, gameScore1)//it will return 101, 101 because it will first increment and then assign the value







