/* Takes in array and element to remove, returns array with removed element 
The element to remove can be another array
Function work with strings
Function only removes same type (ex: does not remove an integer if element is a string)
*/

const removeFromArray = function(arr, ...theArgs) { // arr, elem
  if (arr.length === 2) { // remove single element
    let elem = arguments[1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        arr.splice(i, 1);
      }
    }
  } else { // more than one element
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < theArgs.length; j++) {
        if (arr[i] === theArgs[j]) {
          arr.splice(i, 1);
          i--; // Decrement the index to account for the removed element
          break; // Break out of the inner loop since the element has been removed
        }
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
