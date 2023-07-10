const getTheTitles = function(arr) {
  let bookTitles = [];
  arr.forEach(obj => {
    bookTitles.push(obj.title);
  });
  return bookTitles;
}

// Do not edit below this line
module.exports = getTheTitles;
