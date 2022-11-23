/*
 * Write a recursive method that prints a string passed to it as parameter in reverse order. 
 */

const printReversRecursive = (str, start) => {
  if(start >= str.length)
  return "";
  else
  return printReversRecursive(str, start + 1) + str[start];
}

let stringEntry = "Pratise to remember";
console.log(printReversRecursive(stringEntry, 0));