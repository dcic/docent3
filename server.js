'use strict';

var express = require('express'),
  cors = require('cors'),
  path = require('path'),
  timeout = require('connect-timeout'),
  compress = require('compression');

var app = express();
app.use(cors());
app.use(timeout('20s'));
app.use(compress());

var publicDir = path.join(__dirname, '/');
console.log('Serving static files from ' + publicDir);
app.use('/docent3', express.static(publicDir));

app.get('/', function(req, res) {
  res.status(200).sendFile(publicDir + 'index.html');
});

app.use(function(err, req, res) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Token invalid. You must be logged in to proceed.');
  }
});

app.use(haltOnTimeout);

function haltOnTimeout(req, res, next) {
  if (!req.timeout) {
    next();
  }
}

app.listen(3001, function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running on port ' + 3001);
  }
});
