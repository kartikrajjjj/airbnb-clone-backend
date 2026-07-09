//core module
const path = require('path');

//external module
const express = require('express');
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const errorsController=require('./controllers/errors');
const app= express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended: true}));

app.use(userRouter);
app.use("/host",hostRouter);
app.use(errorsController.pageNotFound);

const PORT=3000;
app.listen(3000,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
})