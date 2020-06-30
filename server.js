// import express from 'express';

const express = require('express');


const app = express();


app.get('/api/videos',(req, res) => {
    const videos = [
        {id: 1, name: 'Joey and Sadie', date:   '4/1/2020'},
        {id: 2, name: 'Joey and Sadie2', date:   '4/2/2020'},
        {id: 3, name: 'Joey and Sadie3', date:   '4/3/2020'}
    ];

    res.json(videos);
});

const port = 5000;

app.listen(port, () => console.log(`started server on port  ${port}`));