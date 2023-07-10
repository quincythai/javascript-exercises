const getTheTitles = function(arr) {
  // let bookTitles = [];
  // arr.forEach(obj => {
  //   bookTitles.push(obj.title);
  // });
  // return bookTitles;

  let result = arr.map(obj => obj.title);
  return result;
}

// Do not edit below this line
module.exports = getTheTitles;
