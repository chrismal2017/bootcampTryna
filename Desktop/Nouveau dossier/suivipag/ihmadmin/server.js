// server.js
const express = require('express');
const app = express();
const path = require('path');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8999);

app.get('/admin/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/admin/index.html'));
});

app.get('/widget/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/widget/index.html'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
