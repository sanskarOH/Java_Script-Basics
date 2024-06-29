//+++++++++++++++++++++++++++++ Memories +++++++++++++++++++++++++++++
// 1. Stack
//PRimitive data types are stored in the stack memory
// 2. Heap
//Non-primitive data types are stored in the heap memory

let myYt = "hellohihello"//goes inn stack
let myYt1 = myYt//goes inn stack
console.log(myYt1)
myYt1 = "helloworld"//goes inn stack

console.log(myYt)
console.log(myYt1)
// here a copy of myYt is created and stored in myYt1
// so myYt and myYt1 are independent of each other
// so changing the value of myYt1 does not affect the value of myYt
// so the output will be:
// hellohihello
// hellohihello
// helloworld

let user = {
    email : "user@google.com",
    password : "1234"
}

let admin = user
console.log(admin)
admin.email = "user5@gmail.com";
console.log(user)

// here a reference of user is created and stored in admin
// so user and admin are dependent on each other
// so changing the value of admin will affect the value of user
//since it is stored in heap memory
//user is stored in stack memory
//but the reference of user is stored in heap memory