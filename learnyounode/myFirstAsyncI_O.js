var fs = require('fs');

var array;
fs.readFile(process.argv[2], 'utf8', function(err, data) {
  // loop through to find all the \n

  array = data.split('\n');
  console.log(array.length-1);
});
