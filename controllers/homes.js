const path = require('path');
const Home= require("../models/home");
exports.getAddHome = (req,res,next)=>{
    res.render("host/addhome.ejs");
}


exports.postAddHome = (req,res,next)=>{
    const {address,price,photo}=req.body;
    const home = new Home(address, price, photo);
    home.save();
    res.render("host/homeadded.ejs");
}
exports.goHome = (req,res,next)=>{
    Home.fetchAll(registeredHomes=>{
        res.render('user/all',{registeredHomes});
    });
};