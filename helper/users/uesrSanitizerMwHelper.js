// capital letter --------------------------------
const capitalLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);

// change to number ------------------------------
const stringToNumber = (string) => +string;

// in alphabet order ------------------------------
const alphabetOrder = (array) => {
  return array.sort();
};

module.exports = { capitalLetter, stringToNumber, alphabetOrder };
