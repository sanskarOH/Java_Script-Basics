//async await akes asynchronous programming simple
//It is used for async operations
//async and await are keywords
//async is used to make a function asynchronous
//await is used to wait for the promise to resolve
//async always returns a promise

// async function hello() {
//   console.log("hello");
// }
//will print hello as well as promise
//link another html to understand
//it will be undefined and pending as no reslove or reject

//await is used to wait for the promise to resolve
//pauses the execution of its surrounding async function until the promise is settled
//await can only beuu used inside an async function

function api(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data", data);
      resolve(200); //code 200 is for success
    }, 2000);
  });
}

//nw if I use await api(); it will give me an error4

async function getData() {
  await api(1);
  await api(2);
}
//to call the api twice we can use await api(); twice
//this was so easy then promise chaining or callback
