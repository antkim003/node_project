// var http = require('http');

// // make a call to a weather api
// // accepts a zipcode and gives me the weather


// // conversion to farenheit

var http = require("http");
// console.log('hello', process.argv);

get(process.argv[2]);


//Print out error messages
function printError(error){
    console.error(error.message);
}

function get(zipcode){
  //Connect to the API URL
  var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=2de143494c0b295cca9337e1e96b00e0", function(response){
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var message = JSON.parse(body);
          var temperature = parseTemperature(message);
          //Print the data
          console.log('the temperature is', temperature, 'farenheit');
        } catch(error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the profile for (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  //Connection Error
  request.on("error", printError);
}


function parseTemperature(jsonObj) {
  // T(°F) = T(K) × 9/5 - 459.67
  return (((jsonObj.main.temp) * 9/5) - 459.67).toFixed(2);
} 














