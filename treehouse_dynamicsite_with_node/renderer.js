var fs = require('fs');

function mergeValues(values, content) {
	// cycle over the keys
		// replace all {{key}} with the value fromt he values object
	for(var key in values) {
		content = content.replace("{{" + key + "}}", values[key]);
	}
	
	return content
}

function view(templateName, values, response) {
	// read from the template file
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"}); 
	fileContents = mergeValues(values, fileContents);
	
	response.write(fileContents);
	
	// insert values in to the content
 
	
	// write out to the response
	
}

module.exports.view = view;