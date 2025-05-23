const express = require("express");
const router = express.Router()

// Import required controller and middlewire functions
const {signUp, login, sendOtp, changePassword} = require("../controllers/Auth");
const {auth} = require("../middlewares/auth");
const {resetPasswordToken, resetPassword} = require("../controllers/ResetPassword");

//************************************************************************ *//
//                Routes for login, signUp, Authentication                  //
//************************************************************************ *//
router.post("/login", login);
router.post("/signUp", signUp);
router.post("/sendOtp", sendOtp);
router.put("/changePassword", auth, changePassword);


//************************************************************************ *//
//                Routes for password reset functions                  //
//************************************************************************ *//
router.post("/resetpasswordtoken", resetPasswordToken);
router.post("/resetpassword", resetPassword);


//Exporting the router for use in main application
module.exports = router


