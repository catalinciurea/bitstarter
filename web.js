#!/usr/bin/env node

var express = require('express');

var app = express();
app.use(express.logger());

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
//  response.send('Hello World!');
//    var body = "Hello World";
//    response.setHeader('Content-Type','text/plain');
//    response.setHeader('Content-Length', body.length);
//    response.end(body);
    response.render('index.html')
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
