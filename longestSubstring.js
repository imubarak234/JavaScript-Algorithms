const multipleChar = (args) => {
  let answer = false;
  let count = 0
  for(let x = 0; x < args.length; x++){

    for(let y = 0 + x; y < args.length; y++){
      if(args[x] == args[y]){
        count++;
      }
      // if(args[x] == 'n'){
      //   console.log(args[x])
      // }
    }
    // console.log(count, "multple")
    if(count >= 2)
    answer = true;
    count = 0;
  }

  return answer;
}