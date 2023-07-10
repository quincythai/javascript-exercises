const palindromes = function (string) {
  const a = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // Removes punctuation + spaces, and makes lowercase.
  return a.split("").reverse().join("") === a; // Split to char array, reverse it, and recombine array into string.
};

// Do not edit below this line
module.exports = palindromes;
