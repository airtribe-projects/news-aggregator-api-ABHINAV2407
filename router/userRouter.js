const express = require('express');
const authController = require("../controller/authController")
const userController = require("../controller/userController")
const { authMiddleware } = require("../middleware/authMiddleware")
const userRouter = express.Router();




userRouter.post("/signup", authController.userSignupHandler);
userRouter.post("/login", authController.userLoginHandler);

userRouter.get("/preferences", authMiddleware, userController.getUserPrefrence);
userRouter.put("/preferences", authMiddleware, userController.updatePrefrences);




module.exports = { userRouter };