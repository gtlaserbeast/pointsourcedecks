const express        = require('express');
const bodyParser     = require('body-parser');
const request        = require('request');
const cors           = require('cors');
var   db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(cors());
app.use(bodyParser.json());

require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('It is happening on port ' + port);
});