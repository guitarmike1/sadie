// import express from 'express';

const express = require('express');


const app = express();
var myjson = []
//requiring path and fs modules *******************************
const path = require('path');
const fs = require('fs');

const { promisify } = require('util')

const readdir = promisify(require('fs').readdir)
const stat = promisify(require('fs').stat)



//joining path of directory 
const directoryPath = path.join(__dirname, 'src/serverSide/videos');

function getDates(files) {
    return Promise.all(
        files.map(async function (fileName) {
            var dateOfFile = await stat(directoryPath + '/' + fileName)
            return  {fileDate: dateOfFile.mtime, fileName: fileName } 
        })
    )
}

async function readDir() {
    let files;
    let withDateFiles = []
    try {
        
        files = await readdir(directoryPath);
        withDateFiles = await getDates(files)

    } catch (err) {
        console.log(err);
    }

    return withDateFiles
        
}


   
app.get('/api/videos',async(req, res) => {
    var result = await readDir()
    //   .sort(function (a, b) {
    //     return a.time - b.time; })
    //   .map(function (v) {
    //     return v.name; });
    console.log("json result",result)
    res.json(result)
    });  


const port = 5000;
console.log("mike **************8")
app.listen(port, () => console.log(`started server on port  ${port}`));