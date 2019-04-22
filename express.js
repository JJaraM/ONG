const express = require('express');
const app = express();
const portNumber = process.env.PORT || 8080;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.get('/', function(req, res){
    const path = '/src/index.html.ejs';
    console.log('sending to ' + path);
    res.sendFile(path);
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
