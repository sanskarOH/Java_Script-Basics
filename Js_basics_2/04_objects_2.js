//how to use singleton objects using constructors

//const tinderuser = new Object();//singleton

const tinderuser = {};//non singleton

tinderuser.id = "123asbc";
tinderuser.name = "Sanskar";
tinderuser.islogged = false;

// console.log(tinderuser)


//giving object under objects

const regularUser = {
    email : "sanskar@google.com",
    details:{
        firstname : "Sanskar",
        lastname :  "Diwedi",
        age : 19,
    },
    logstatus : false
}

// console.log(regularUser);
//Output
// {
//     email: 'sanskar@google.com',
//     details: { firstname: 'Sanskar', lastname: 'Diwedi', age: 19 },
//     logstatus: false
//   }

// console.log(regularUser.details.age);//19

//optional chaininng if an object is no present in the variable
//we can use ternary operator syntax

//Obeject can also be combined 
 const obj = {
    1 : "a",
    2 : "b"
 }

 const obj2 = {
    3 : "c",
    4 : "d"
 }
 //can't do 
//  const obj3 = { obj , obj2}
//Use object assign
// const obj3 = Object.assign({} ,  obj , obj2)
//{} is an optional parameter which ensures that values are copied accordingly


//use spread operator 
const obj3 = {...obj,...obj2}
//  console.log(obj3)
//we can take object keys or values in arrayas 
console.log(Object.values(tinderuser));
//in databse we will get array of objects

const users = [
    {
        id : "1",
        name : "sanskar"
    },
    {
        id : "2",
        name : "Ahem"
    },
    {
        id : "3",
        name : "Gopi"
    }
]

console.log(users[0].name)