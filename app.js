//core moduel
const path = require('path');

//external module
const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const app= express();

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended: true}));

app.use(userRouter);
app.use("/host",hostRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})

const PORT=3000;
app.listen(3000,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
})