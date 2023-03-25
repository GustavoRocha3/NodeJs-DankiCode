const fs = require('fs');

fs.readFile('danki.txt', function(err,data){
    let str = data.toString();

    //let newstr = str.split('/');

    let newstr = str.substr(1,3);

    console.log(newstr);

})