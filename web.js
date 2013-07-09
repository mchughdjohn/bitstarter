var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readFile('./index.html', function (err, html) {
  if (err) throw err;
  response.write(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
