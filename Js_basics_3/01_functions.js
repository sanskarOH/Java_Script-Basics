//Functions in JavaScript
//memory management in javascript


// function SayMyName(){
//     //scope of function
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// SayMyName();
//without parantheses it is just reference 
//but with paranthese it is execution as well

function add(num1 , num2 ){
    //need not to give datatype of numberss
    console.log(num1+num2)

}
add(3,5.6)
add(4,"5")
add(3,"abc")
add(3,null)