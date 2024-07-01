//dates is a little bit pain topic
// Date object is used to work with dates and times.
//Link for mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//JavaScript Date objects represent a single moment in time in a 
//platform-independent format. Date objects encapsulate an integral number 
//that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
//IN future Temporal object will be used to work with dates and times


let myd = new Date();//instance of date
//console.log(myd);
//converting to string
console.log(myd.toString())
//to local time zone
console.log(myd.toLocaleString('en-US'))
//to ISO string
console.log(myd.toISOString())
//to Json string
console.log(myd.toJSON())
//type of date
console.log(typeof myd);//object

const mydate = new Date(2023 , 11, 31 , 23, 44);
//months are 0 based index

console.log(mydate.toString());
console.log(mydate.toLocaleString('en-IN'));

//timestamp
let timestamp = Date.now();
console.log(timestamp);
//to convert timestamp to date
let date = new Date(timestamp);
console.log(date.toString());
console.log(date.toLocaleString('en-IN'));
//to covert timestamp to seconds