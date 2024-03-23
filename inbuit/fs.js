//file system
let fs=require('fs')
// write file system
// This will overwrite the existing file system.js if it exists. 
// fs.writeFileSync("mytext.text", 'This is node fs package', function(err){
// if(err) throw err;
// console.log("This task done ✈️ ")
// }) // file name, data, callback  


/// add the new file  means generate the new file 
// fs.appendFileSync("mycodefile", "This is node file", function(err){
//     if(err) throw err;
//     console.log("file appended")
// })

// This will add the content in same file

fs.appendFile("mycodefile appcode", `${Math.floor(Math.random()*1000)} This code \n` , function(err){
    if(err) throw err;
    console.log(" Add Remdom number")
})

