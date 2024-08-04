// fs -> file system
const fs = require('fs') ;

// fs.writeFile(file, data[, options], callback
fs.writeFile("hey.txt" , "hey! how are you?" , function(err){
    if(err) console.log(err) ;
    else console.log("done") ;
})  ;

// fs.appendFile(path, data[, options], callback)
fs.appendFile("hey.txt" , "what are you doing?" , function(err){
    if(err) console.log(err) ;
    else console.log("done") ;
})  ;

// fs.rename(oldPath, newPath, callback)
fs.rename("hey.txt" , "hello.txt" , function(err){
    if(err) console.log(err) ;
    else console.log("done") ;
})

// fs.copyFile(src, dest[, mode], callback)
fs.copyFile("hello.txt" , "./copy/heya.txt",function(err){
    if(err) console.log(err) ;
    else console.log("done") ;
})

// fs.unlink(path, callback)
fs.unlink("hello.txt", function(err){
    if(err) console.log(err) ;
    else console.log("removed") ;
})

// fs.rmdir(path[, options], callback) -> to remove empty folder

// fs.rm(path[, options], callback)
fs.rm("./NODE/copy" , {recursive: true}, function(err){
    if(err) console.log(err) ;
    else console.log("removed") ;
})
