// Given array full of objects with name, yearOfBirth, and yearOfDeath, return the oldest person object.
const findTheOldest = function(people) {
  // let oldest = 0;
  // let oldestPerson = null;

  // people.forEach(person => {
  //   let age;
  //   if ("yearOfDeath" in person) {
  //     age = person.yearOfDeath - person.yearOfBirth;
  //   } else {
  //     age = (new Date().getFullYear() - person.yearOfBirth);
  //   }

  //   if (age > oldest) {
  //     oldest = age;
  //     oldestPerson = person;
  //   }
  // });
  // return oldestPerson;

  return people.reduce((oldestPerson, currentPerson) => {
    if (getAge(oldestPerson) < getAge(currentPerson)) {
      oldestPerson = currentPerson;
    }
    return oldestPerson;
  });

  function getAge(person) {
    if ("yearOfDeath" in person) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return new Date().getFullYear() - person.yearOfBirth;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
