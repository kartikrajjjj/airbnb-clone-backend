const path = require('path');
const registeredHomes=[];
exports.getAddHome = (req,res,next)=>{
    res.render(path.join(__dirname,"../","views","addhome.ejs"));
}


exports.postAddHome = (req,res,next)=>{
    registeredHomes.push({
    address: req.body.address,
    price: req.body.price,
    photo: req.body.photo
    });
    res.render(path.join(__dirname,"../","views","homeadded.ejs"));
}
exports.goHome = (req,res,next)=>{
        res.render('all',{registeredHomes: registeredHomes});
};