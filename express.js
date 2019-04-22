var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;
var app = express();

var pathVar = path.join(__dirname, '../dist', 'index.html');

console.log('Dist Folder: ' + pathVar);
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_req, res) => {
  res.sendFile(pathVar);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
