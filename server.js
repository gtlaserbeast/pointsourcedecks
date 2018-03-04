const express        = require('express');
const bodyParser     = require('body-parser');
const request        = require('request');
const app            = express();

const port = 8000;

app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(port, () => {
  console.log('It is happening on port ' + port);
});