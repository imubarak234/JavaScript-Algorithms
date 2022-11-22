const arraySums = (arr, start) => {
  if(start >= arr.length)
  return 0;
  else
  return arraySums(arr, start + 1) + arr[start];
}

let firstArray = [ 2, 5, 5, 8, 45, 3, -5, -33, 6]
console.log(arraySums(firstArray, 0))