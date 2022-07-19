var generate = function(numRows) {
      let ans = [[1],[1,1]];
    
      if (numRows == 1) return [[1]];
      else if (numRows == 2) return [[1],[1,1]];
    
      for(let x = 3; x <= numRows; x++){
          let newArray = [];
          for(let y = 1; y <= x; y++){
            let pre = ans[x - 2];
            //console.log(pre)
            if(y == 1){ newArray.push(1) }
            else if(y > 1 && y < x){
              newArray.push(pre[y-1]+pre[y-2])
            }
            else{ newArray.push(1); }
          }
          ans.push(newArray);
      }

      
      return ans;
};
