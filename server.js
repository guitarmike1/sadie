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
            withDateFiles = await stat(directoryPath + '/' + fileName)
            console.log(withDateFiles.mtime)
                // return (withDateFiles.mtime)
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
   
//*********************app.get stuff */
app.get('/api/videos',(req, res) => {
    fs.readdir(directoryPath, function(err, files){
    files = files.map(function (fileName) {
        return {
        name: fileName,
        //   time: fs.statSync(directoryPath + '/' + fileName).mtime.getTime(),
        date: Date(fs.statSync(directoryPath + '/' + fileName).mtime.getTime())
        //   date: new Date(time)
        };

    })
    //   .sort(function (a, b) {
    //     return a.time - b.time; })
    //   .map(function (v) {
    //     return v.name; });
    console.log("files",files)
    res.json(files)
    });  
});  
//*********************app.get stuff */
//*************************************** */


const port = 5000;
console.log("mike **************8")
app.listen(port, () => console.log(`started server on port  ${port}`));