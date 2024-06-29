console.log(2>1)//true
console.log(2<1)//false
console.log(2>=1)//true
console.log(2<=1)//false
console.log(2==1)//false

//problem comes when we compare two different data types
console.log(2=='2')//true
console.log(2>='2')//true
//we should always compare the same data types
//typescript will not allow this type of comparison

//comparison of null and undefined
console.log(null==undefined)//true
//comparision of numm with any other value
console.log(null==0)//false
console.log(null==false)//false
//The reason is that null is a special value that represents the absence of a value.
//that an equality check for null against any other value is always false, except for undefined.
//Comparions convert null to a number , treating it as 0
//(3)null>=0//true
//(4)null>0//false

console.log((3),null>1)//false

//undefined is a type itself
console.log(undefined==0)//false
console.log(undefined==false)//false
console.log(undefined==null)//true
//Comparions convert undefined to a number , treating it as NaN
//console.log(undefined==null) //true because both are equal but how? 
//null and undefined are equal to each other but not to any other value

//null will either be Converted to 0 or NaN .