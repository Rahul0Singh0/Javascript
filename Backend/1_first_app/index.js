require('dotenv').config()
const express = require('express'); // common js first way 
// import express from "express"; // module js second way
const app = express();
const port = 3000

// '/' is home route
app.get('/',(req, res)=>{
    res.send('Hello World!');
});

app.get('/login', (req,res)=>{
    res.send('<h1>Please login</h1>')
});

app.get('/twitter',(req,res)=>{
    res.send('Twitter');
});

// Constantly Listen
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
});