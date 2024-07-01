//array
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//printing the array
console.log(myArr)
//mdn link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//elements can be of different types
const My2 = ["hello",1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(My2);
//typeof Array
console.log(typeof myArr);//object
//in Javascript arrays are resizable


//Accessing elements of an array
console.log(myArr[0]);//1

//Arrays will always be shallow copied
//Meaning if you copy an array to another array, the copied array will be a reference to the original array

const test1 = [1, 2, 3, 4, 5];
console.log(test1);
const test2 = test1;
test2[2] = 100;
console.log(test1);//[1, 2, 100, 4, 5]
//hence the arrays share same reference point
//because they are stored in heap memory.