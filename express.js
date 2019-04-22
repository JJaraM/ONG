const express = require('express');
const app = express();
const portNumber = process.env.PORT || 8080;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

console.log(__dirname);

app.get('/', function(req, res){
    console.log('redirect');
    res.sendFile(__dirname  + "/" + sourceDir + '/index.html');
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
