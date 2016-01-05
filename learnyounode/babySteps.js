var output = 0;
// console.log(process.argv);
for (var i = 2; i < process.argv.length; i++) {
  output += parseInt(process.argv[i]);
};

console.log(output);