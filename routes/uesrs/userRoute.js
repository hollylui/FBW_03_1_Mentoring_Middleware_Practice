const express = require("express");
const router = express.Router();

const {
  userValidateRules,
  userValidation,
} = require("../../middlewares/users/userValidatorMw");

const { userSanitizer } = require("../../middlewares/users/userSanitizerMw");

const users = [];

//list all users -------------------------------------
router.get("/", (req, res) => {
  return res.status(200).json(users);
});

// validation ----------------------------------------
router.post(
  "/validateuser",
  userValidateRules(),
  userValidation,
  (req, res) => {
    const { firstName, lastName, age, fbw, email, profession, favoriteBands } =
      req.body;

    const user = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      fbw: fbw,
      profession: profession,
      favoriteBands: favoriteBands,
      email: email,
    };

    users.push(user);

    return res.status(200).json({ message: "This user is valid!", user: user });
  }
);

// sanitization ----------------------------------------
router.post("/sanitizeuser", userSanitizer, (req, res) => {
  const { firstName, lastName, age, fbw, email, profession, favoriteBands } =
    req.body;

  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    fbw: fbw,
    profession: profession,
    favoriteBands: favoriteBands,
    email: email,
  };

  users.push(user);

  return res.status(200).json({ message: "User is added.", user });
});

module.exports = router;
