
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

const box = [];
let count = 0;

do {
  box.push(count)
  count++;
}while (count == 10)

console.log(box)


const box2 = [];
let count2 = 0;

while(count2 < 20){
  count2++;
  box2.push(count2);
  
}

console.log(box2)

const box3 = [];
let count3;

for(count3 = 0; count3 < 20; count3++){
  box3.push(count3);
}

console.log(box3)

function print(morning){
  let box = [];
  for(let x = 0; x < morning; x++){
    box.push(x);
  }
  console.log(box)
}

print(9);

function print(morning){
  let box = [];
  for(let x = 0; x < morning; x++){
    box.push(x);
  }
  console.log(box)
}

print(9);

function scores(testscores){
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
}

scores(50)

console.log(Date.now())