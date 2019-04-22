var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;
var app = express();

console.log('Dist Folder: ' + path.join(__dirname, '../dist/index.html'));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
