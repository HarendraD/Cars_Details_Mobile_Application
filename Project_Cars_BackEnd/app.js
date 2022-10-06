
const express = require('express')

const mongoose = require('mongoose')
const app = express();
const port =4000;

app.use(express.json())

const user = require("./routes/user")
const cars = require("./routes/cars")



const url = 'mongodb://127.0.0.1/carappDb'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log('Database connected!');
})

app.use("/user",user);
app.use("/car",cars);

app.listen(port,(req,res)=>{
    console.log("App Running on port 4000")
})