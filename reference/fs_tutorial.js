const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'),{}, (err)=>{
//    if(err) throw err;
//    console.log('Folder created');
// });


//Only writes new content
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'),'test content', err=>
// {
// if(err) throw err;
// console.log('File written to');

// });

// Appending to file
// fs.appendFile(path.join(__dirname, '/test', 'test.txt'),'append content', err=>
// {
// if(err) throw err;
// console.log('Append');

// });

// Reading file
// fs.readFile(path.join(__dirname, '/test', 'test.txt'),'utf8', (err, data)=>
// {
// if(err) throw err;
// console.log('data: '+data);

// });

// Renaming file
fs.rename(path.join(__dirname, '/test', 'test.txt'),path.join(__dirname, '/test', 'testNew.txt'), (err)=>
{
if(err) throw err;
console.log('File renamed');

});