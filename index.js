#!/usr/bin/env node
const fs = require('fs');
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(filenames.toLocaleString());
//   for (const fileName of filenames) {
//       fs.lstat(fileName,(err, stats) => {
//         if(err){
//             throw new Error(err);
//         }
//         console.log(fileName,stats.isFile());

//       });
//   }
});

const lstat = function lstat(fileName){
    return new Promise((resolve, reject) => {
        fs.lstat(fileName,(err, stats) => {
            if(err){
                reject(err);
            }
            resolve(stats);
        });        
    });
}
