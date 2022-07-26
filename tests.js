let myString = "Hello world";

let meInt = 23;

let myFloat = 23.47;

let myBool = true;

let myArray = [true, false, "string", 88]

let myObject = {
  "one" : 34,
  "two" : 94,
  "three" : [43, 89],
  "four" : "string",
  five : {
    six : [2,3,4],
    seven : [4,5,6],
  }
}

console.log("The data type = " + typeof(myArray));
console.log(myObject['five'].six)

var myVariable = 90;
let first = 67;

console.log(myVariable)

myVariable = 50

console.log(myVariable)

const constant = "string"

console.log(constant)

let second = 'myStirng'

let third = 'string'

if('3' > '3'){
  console.log("finished")
}
else if (typeof(third) == 'string') {
  console.log('almost there')
}
else {
  console.log('Not Finished')
}

let testScore = 30;

if((testScore <= 100) && (testScore >= 70)){
  console.log("A");
}
else if((testScore < 70) && (testScore >= 60)){
  console.log("B");
}