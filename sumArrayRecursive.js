/*
 * Write a recursive method that returns the sum of elements in an array of double.  
 * Test your method by writing a main method that creates an array of double of size 10, initialize it by reading data from the user and calling your method to compute the sum and print it.
 */

const arraySums = (arr, start) => {
  if(start >= arr.length)
  return 0;
  else
  return arraySums(arr, start + 1) + arr[start];
}

let firstArray = [ 2, 5, 5, 8, 45, 3, -5, -33, 6]
console.log(arraySums(firstArray, 0))