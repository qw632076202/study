var fs = require('fs')
var path = require('path')

// fs.readFile(path.join(__dirname,'./1.txt'),function(error,data){
//     console.log(data)
// });

fs.writeFile(path.join(__dirname,'./1.txt'),'大家好啊',function(error){
    console.log(error)
})
