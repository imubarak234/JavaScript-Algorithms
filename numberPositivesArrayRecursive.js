/*
 * write another recursive method that counts the number of positive elements in the array. 
 * Add a statement inside the main method to call this method so that you program prints both the sum and the number of positive elements in the array.
 */

const positiveArray = (arr, start, count) => {
  if (start >= arr.length)
  return 0;
  else if(arr[start] > 0){
    //console.log(count)
    return positiveArray(arr, start + 1, count) + count;
  }
  else {
    //console.log(count)
    return positiveArray(arr, start + 1, count);
  }
}

let secondArray = [ -1, -4, -8, -9, 0, 3, 9 ]

console.log(positiveArray(secondArray, 0, 1))