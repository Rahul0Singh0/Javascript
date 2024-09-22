// const express = require('express');
import express from 'express';
const app = express();

// middleware of express
app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//     res.send(`Server is ready`);
// });

// get a list of 5 jokes
app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: 'This is fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})