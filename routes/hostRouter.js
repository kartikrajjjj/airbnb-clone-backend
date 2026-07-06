const path= require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");
const {getAddHome, postAddHome}=require("../controllers/homes");

hostRouter.get("/home",getAddHome);

hostRouter.post("/home",postAddHome);

exports.hostRouter = hostRouter;