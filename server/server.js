var express = require('express');

var app = express()

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

app.use('/', express.static(__dirname ));

var port = process.env.PORT || 5050;
app.listen(port, function() {
  console.log("Listening on " + port);
});
