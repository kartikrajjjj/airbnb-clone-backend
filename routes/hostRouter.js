const path= require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/home",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addhome.html"));

})

const registeredHomes=[];

hostRouter.post("/home",(req,res,next)=>{
    console.log('Home Registration Successful for Address:',req.body.address);
    registeredHomes.push({address: req.body.address});
    res.sendFile(path.join(__dirname,"../","views","homeadded.html"));

})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;