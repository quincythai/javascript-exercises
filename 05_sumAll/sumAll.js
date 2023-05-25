/* Returns the sum of all numbers between a and b inclusive 
EX: sumAll(1, 4) -> 1 + 2 + 3 + 4 = 10

*/

const sumAll = function(a, b) {
  if (a < 0 || b == 0 || typeof(a) != "number" || typeof(b) != "number")
    return "ERROR";

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
