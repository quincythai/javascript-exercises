/* Takes in a string and reverses it
EX: reverseString("hello there") returns "ereht olleh"
*/

const reverseString = function(inputString) {
  // cannot mutate strings in js
  // Algorithm: reverse iteration appending chars to result string
  let str = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    str += inputString[i];
  }
  return str;
};

// Do not edit below this line
module.exports = reverseString;
