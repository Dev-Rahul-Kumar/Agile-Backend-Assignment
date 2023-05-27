const express= require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const dotenv =require('dotenv')
const route = require('./route/Route')






const app =express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({extended:true}));
app.use(express.json())







dotenv.config()
const Port =process.env.Port;
const username =process.env.DB_username
const password =process.env.DB_password



// Mongoose connection 
const url=`mongodb+srv://${username}:${password}@nodetutes.6tllifg.mongodb.net/agile?retryWrites=true&w=majority`;

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
    console.log('connection to database sucessful');
})
.catch((err)=>console.log(err))





app.use('/',route);
// const Port =3000;
app.listen(Port,()=>{
    console.log(`Server is running at http://localhost:${Port}`);

})