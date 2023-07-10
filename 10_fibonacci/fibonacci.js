const fibonacci = function(n) {
  if (n <= 0)
    return "OOPS";
  if (n <= 2)
    return 1;
  let a = 1;
  let b = 1;
  let sum = 0;
  for (let i = 0; i < n - 2; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
