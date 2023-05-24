/* Take in string and number of repetitions, return string x # of repetitions 
EX: repeatString('hey', 3) -> 'heyheyhey'
*/
const repeatString = function(str, numRepeat) {
  if (numRepeat < 0)
    return 'ERROR';

  let result = "";
  for (let i = 0; i < numRepeat; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
