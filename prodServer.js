var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.prod');
var app = express();

var DIST_DIR = path.join(__dirname,"dist");

app.use(express.static(DIST_DIR));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
