var twoSum = function(nums, target) {
  let answer = [];
let isAnswer = false;


for(let x = 0; x < nums.length; x++){

  for(let y = x + 1; y < nums.length; y++){

    let sums = nums[x] + nums[y]
    if(sums == target){
      answer.push(x);
      answer.push(y);
      isAnswer = true;
      break;
    }
  };
  if(isAnswer) break;
};

return answer;
};