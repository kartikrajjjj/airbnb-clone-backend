const path = require('path');

const express = require('express');
const userRouter = express.Router();

const { goHome } = require('../controllers/homes');

userRouter.get("/",goHome);
module.exports= userRouter;