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

// fs.appendFile("mycodefile appcode", `${Math.floor(Math.random()*1000)} This code \n` , function(err){
//     if(err) throw err;
//     console.log(" Add Remdom number")
// })


// Read file

        // fs.readFile('mytext.text','utf-8', function(err, data){
        //      console.log("data", data)
        // })
// o.p data <Buffer 54 68 69 73 20 69 73 20 6e 6f 64 65 20 66 73 20 70 61 63 6b 61 67 65>   encoded from of data
// <buffer-encoded from of data


// Delete file  --> Here wrong file so throw the error
// fs.unlink('test.text', function(err){
//     if(err) throw err;
//     console.log("file deleted")
// })


// if file Name is correct then file will be deleted .  here correct file Name so delete the file
// fs.unlink('mytext.text', function(err){
//     if(err) throw err;
//     console.log("file deleted")
// })

/// ReName the file
// fs.rename('mycodefile', 'mycodefile.text', function(err){
//     if(err) throw err;
//     console.log("file renamed")
// })

   
    