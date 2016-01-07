var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeader = {'Content-Type': 'text/html'};

function home(request,response) {
	if (request.url === "/") {
		if (request.method.toLowerCase() === "get") {
			
			response.writeHead(200, commonHeader);
			renderer.view("header", {}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		} else {
			request.on("data", function(postBody) {
//				var body = "" + postBody;
				console.log(postBody.toString());
				var query = querystring.parse(postBody.toString());
				response.writeHead(303, {"Location": "/" + query.username});
				response.end();
			});
		}
	}
}

function user(request,response) {
	var username = request.url.replace("/","");
	if (username.length > 0) {
		response.writeHead(200, commonHeader);
		renderer.view("header", {}, response);
		
		
		var studentProfile = new Profile(username);
		
		studentProfile.on("end", function(profileJSON) {
			// show profile
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badgeCount: profileJSON.badges.length,
				javascriptPoints: profileJSON.points.JavaScript,
			}
			
			// simple response
			renderer.view("profile", values, response);
			renderer.view("footer", {}, response);
			response.end();
		});
		studentProfile.on("error", function(error) {
			//show error
			renderer.view("error", error.message, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		});
		
											
		
		// get json from tree hosue
		 // on "end"
		
		   // show profile
	   // on "error"
		    //show error
		
	}
}



module.exports.home = home;
module.exports.user = user;