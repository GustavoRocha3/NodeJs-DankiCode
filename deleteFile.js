const fs = require('fs');
const read = require('readline');

fs.unlink('danki.txt', function(err){
    console.log('arquivo foi deletado');
})