const express = require("express");
const controller = require("../controller/controller");

const postRouter = express.Router();
postRouter.post("/event", controller.createEvent);
postRouter.get("/event", controller.getEvents);

module.exports = postRouter;