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
    let withDateFiles
    try {
        
        files = await readdir(directoryPath);
        var mewb = files.map(async function (fileName) {
            return await stat(directoryPath + '/' + fileName)
            // withDateFiles = withDateFiles.mtime
            // return  {filename: fileName } 
            // return  {fileDate: stats.mtime, filename: newFiles } 
        })
        console.log("with Dates",mewb)
        console.log("justn files",files)

    } catch (err) {
        console.log(err);
    }
        

        }

var result = readDir()
console.log("files result",result)
   



const port = 5000;
console.log("mike **************8")
app.listen(port, () => console.log(`started server on port  ${port}`));