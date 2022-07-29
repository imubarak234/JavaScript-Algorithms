
lessons = null;

myobject = {};

console.log(typeof(myobject));


let myvariable = "friday";

let isWorking = false;

console.log(myvariable); 

myvariable = "monday"

console.log(myvariable)

if('5' == '4'){
  console.log("finish");
  var condition = "string"
}
else {
  console.log("no finished");
}

if(9 <= 8) {
  console.log("success")
}
else {
  console.log("fail")
}

if ( "computer" == "computer" ){
  console.log("mac is the best");
}
else if (89 > 5){
  console.log("Lunch time");
}
else {
  console.log("unfinished");
}


testscores = 88;

if( (testscores <= 100) && (testscores >= 70) ){
  console.log("A");
}
else if ((testscores < 70) && (testscores >= 60)){
  console.log("B");
}
else if((testscores < 60) && (testscores >= 55)){
  console.log("C");
}
else if((testscores < 55) && (testscores >= 49)){
  console.log("D");
}
else {
  console.log("F");
}

if ((testscores > 60) || (testscores < 80)){
  console.log("You did great")
}

const arr = [];
let count = 0;

do {
  arr.push(count);
  count++
} while (count == 5);

if("3" == 3){
  console.log("Its the same")
}

console.log(arr);
