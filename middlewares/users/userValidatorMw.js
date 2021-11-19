const { body, validationResult } = require("express-validator");

const firstName = body("firstName")
  .exists()
  .withMessage("Please input your first name.")
  .isAlpha()
  .withMessage("Please input letter only.")
  .isLength({ max: 20 })
  .withMessage("Please not more than maximum 20 letters.")
  .trim();

const lastName = body("lastName")
  .exists()
  .withMessage("Please input your last name.")
  .isAlpha()
  .withMessage("Please input letter only.")
  .isLength({ min: 2 })
  .withMessage("Please input minimum 2 letters.")
  .trim();

const age = body("age")
  .exists()
  .withMessage("Please input your age.")
  .isNumeric({ no_symbols: true })
  .withMessage("Numbers only. No symbol.")
  .isFloat({ min: 18 })
  .withMessage("We can not validate account. You are below 18 years old.")
  .trim();

const fbw = body("fbw")
  .exists()
  .withMessage("Please input your class name.")
  .isAlphanumeric()
  .equals("36")
  .withMessage("We can not validate account. You are not a member of FBW36")
  .trim();

const email = body("email")
  .exists()
  .withMessage("Please input your email.")
  .isEmail()
  .withMessage("We can not validate account. Your email is invalid.")
  .trim();

// function for validation -----------------------
const userValidateRules = () => {
  return [firstName, lastName, age, fbw, email];
};

const userValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "This user is valid!", error: errors.errors[0].msg });
  }

  next();
};

module.exports = { userValidateRules, userValidation };
