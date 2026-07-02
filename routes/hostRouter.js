const path= require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/home",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));

})

hostRouter.post("/home",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","homeadded.html"));

})

module.exports = hostRouter;