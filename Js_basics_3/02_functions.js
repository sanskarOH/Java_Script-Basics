//Functions in Objects
//Shopping Cart logic

function calculateCartPrice(...num1){
    return num1
}
//for one value its okay
console.log(calculateCartPrice(3))
//for too many values we can use rest cum spread operator ...
console.log(calculateCartPrice(3 ,300 ,3003))

//it means to bundlise all the data getting to thhe function

//now what if I have another funtion 

function cart2(val1,val2,...num1){
    return num1;

}
console.log(cart2(3 ,300 ,3003))//this will return only 3003
//that is because the first two values given to the val1 and val var
