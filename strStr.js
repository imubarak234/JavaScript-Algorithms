var strStr = function(haystack, needle) {
  let finalAnswer = -1;
  let length = needle.length - 1;

  if(needle.length === 0){
    finalAnswer = 0;
  }
  else if(haystack.length >= needle.length){

    for(let x = 0; x < haystack.length; x++){
      let pointerX = x;
      let count = 0;
      if(needle[0] === haystack[x]){
        for(let y = 0; y < needle.length; y++){
          if(needle[y] === haystack[pointerX]){
            count++;
          }
          pointerX += 1;
        }
      }

       if(count === needle.length){
        finalAnswer = x;
        break;
      } 
    }
  }

  return finalAnswer;
};
