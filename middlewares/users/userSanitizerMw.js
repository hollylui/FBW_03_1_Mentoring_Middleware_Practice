const {
  capitalLetter,
  stringToNumber,
  alphabetOrder,
} = require("../../helper/users/uesrSanitizerMwHelper");

const userSanitizer = (req, res, next) => {
  req.body.firstName = capitalLetter(req.body.firstName);
  req.body.lastName = capitalLetter(req.body.lastName);
  req.body.age = stringToNumber(req.body.age);
  req.body.fbw = stringToNumber(req.body.fbw);
  req.body.favoriteBands = alphabetOrder(req.body.favoriteBands);

  next();
};

module.exports = { userSanitizer };
