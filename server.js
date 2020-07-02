// import express from 'express';

const express = require('express');


const app = express();

//requiring path and fs modules *******************************
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'src/serverSide/videos');
console.log("directory path = ",directoryPath)
//passsing directoryPath and callback function


fs.readdir(directoryPath, function(err, files){
  files = files.map(function (fileName) {
    return {
      name: fileName,
      time: fs.statSync(directoryPath + '/' + fileName).mtime.getTime()
    };
  })
  .sort(function (a, b) {
    return a.time - b.time; })
  .map(function (v) {
    return v.name; });
console.log(files)

});  


app.get('/api/videos',(req, res) => {
    const videos = [
        {id: 1, name: 'Joey and Sadie', date:   '4/1/2020'},
        {id: 2, name: 'Joey and Sadie2', date:   '4/2/2020'},
        {id: 3, name: 'Joey and Sadie3', date:   '4/3/2020'}
    ];

    res.json(videos);
});

const port = 5000;
console.log("mike1")
app.listen(port, () => console.log(`started server on port  ${port}`));