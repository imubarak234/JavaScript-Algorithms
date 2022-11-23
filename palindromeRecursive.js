/*
 * write another recursive method that counts the number of positive elements in the array. 
 * Add a statement inside the main method to call this method so that you program prints both the sum and the number of positive elements in the array.
 */

const palindrome = (str, start, end) => {
  if(start >= str.length)
  return true;
  else if(str[start] != str[end])
  return false;
  else
  return palindrome(str, start + 1, end - 1);
}

let stringEntry = "troublelbuort"
console.log(palindrome(stringEntry, 0, stringEntry.length - 1))