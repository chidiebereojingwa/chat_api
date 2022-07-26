const express = require("express");
const router = express.Router();

// user controller

const {loginUser, signUpUser} = require('../controllers/userController')


// Login route

router.post("./login", loginUser);


// signup route

router.post("./signup", signUpUser);


module.exports = router