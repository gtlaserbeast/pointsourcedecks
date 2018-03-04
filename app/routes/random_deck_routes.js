
module.exports = function(app) {
  var request = require('request'),
      fs = require('fs');
  app.get('/deck/:id', (req, res) => {
    fs.readFile('./decks.json', 'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err);
      } else {
        
        res.send(JSON.parse(data).decks[req.params.id]);
      }
    });
  });

  app.post('/randomDeck', (req, res) => {
    var storage = {};
    //check to see if there are already decks
    fs.readFile('./decks.json', 'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err);
      } else {
        storage = JSON.parse(data);
      }
    });

    //call pointsource for randomness
    const getRandomURL = 'http://applicant.pointsource.us/api/random/5a95a6a5d625c81979aa798c',
          min = 1,
          max = 53;
    var generatedArray = {};
    request(getRandomURL + '?min=' + min + '&max=' + max + '&num=' + (max - 1), function (error, response, body) {
      generatedArray = JSON.parse(body); //JSONify deck being created
      storage.decks.push(generatedArray.numbers); //store created deck's numbers
      fs.writeFile('./decks.json', JSON.stringify(storage), 'utf8'); //write full list of decks
      console.log('Created deck #' + storage.decks.length);
    });
  });
};