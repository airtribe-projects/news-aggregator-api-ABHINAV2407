const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware")
const newsController = require("../controller/newsController")
const newsRouter = express.Router();

newsRouter.get("/", authMiddleware, newsController.newsHandler);

module.exports = { newsRouter }