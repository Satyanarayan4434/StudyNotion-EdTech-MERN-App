const express = require("express");
const router = express.Router();

// Import controller function required
const {
  updateProfile,
  deleteAccount,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile");

const {auth} = require("../middlewares/auth");

//***************************************************************************** *//
//                                  Profile Routes                              *//
//***************************************************************************** *//
router.put("/updateprofile", auth, updateProfile);
router.delete("/deleteaccount", auth, deleteAccount);
router.get("/getUserdetails", auth, getAllUserDetails);
router.put("/updatedisplayPicture", auth, updateDisplayPicture);
router.get("/getenrolledcourses", auth, getEnrolledCourses);

//Exporting the router for use in main application
module.exports = router;