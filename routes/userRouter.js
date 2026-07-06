const path = require('path');

const express = require('express');
const userRouter = express.Router();

const { registeredHomes } = require('./hostRouter');

userRouter.get("/",(req,res,next)=>{
        res.render('all',{registeredHomes: registeredHomes});
});
module.exports= userRouter;