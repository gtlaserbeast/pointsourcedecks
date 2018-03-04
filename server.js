const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const request        = require('request');
const cors           = require('cors');
var   db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
                      
  // Make sure you add the database name and not the collection name
  db = database.db("random-deck")
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('It is happening on port ' + port);
  });               
})