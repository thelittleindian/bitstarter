var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
fs.readFileSync('/index.html', function(err, html){
    if(err){
	return console.log(err);
    }
    
    response.send(html.toString('utf8', 0));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});