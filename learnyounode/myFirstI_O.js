var fs = require('fs');

var output = fs.readFileSync(process.argv[2]).toString();

// console.log(output);

// loop through to find all the \n
var array = output.split('\n');

console.log(array.length-1);

