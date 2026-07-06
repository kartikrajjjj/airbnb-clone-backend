const path= require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/home",(req,res,next)=>{
    res.render(path.join(__dirname,"../","views","addhome.ejs"));

})

const registeredHomes=[];

hostRouter.post("/home",(req,res,next)=>{
    registeredHomes.push({address: req.body.address});
    res.render(path.join(__dirname,"../","views","homeadded.ejs"));

})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;