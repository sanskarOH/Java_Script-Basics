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