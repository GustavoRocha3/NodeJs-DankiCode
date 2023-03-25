const fs = require('fs');
const read = require('readline');

fs.rename('danki.txt', 'dankicode.txt', function(err){
    console.log('arquivo foi renomeado');
})