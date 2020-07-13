// import express from 'express';

const express = require('express');


const app = express();
var myjson = []
//requiring path and fs modules *******************************
const path = require('path');
const fs = require('fs');
// const util = require('util');

const { promisify } = require('util')

const readdir = promisify(require('fs').readdir)
const stat = promisify(require('fs').stat)



// const readdir = util.promisify(fs.readdir);
// const stat = util.promisify(fs.stat);
//joining path of directory 
const directoryPath = path.join(__dirname, 'src/serverSide/videos');


async function readDir() {
    let files;
    let dateOfFile
    let withDateFiles = []
    try {
        
        files = await readdir(directoryPath);
        var mewb = files.map(async function (fileName) {
            dateOfFile = await stat(directoryPath + '/' + fileName)
            withDateFiles.push(dateOfFile.mtime)
            return withDateFiles
            // return  {fileDate: withDateFiles.mtime, filename: fileName } 
        })
        console.log("mewb",mewb)
        console.log("just files",files)

    } catch (err) {
        console.log(err);
    }
    console.log("clean result",mewb.arg1)
    console.log("withDateFiles",withDateFiles)

    return mewb
        
}


   
//*********************app.get stuff */
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