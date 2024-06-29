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