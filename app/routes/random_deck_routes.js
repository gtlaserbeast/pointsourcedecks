
module.exports = function(app, db) {
  var request = require('request'),
      fs = require('fs');

  app.post('/randomDeck', (req, res) => {
    var storage;
    fs.readFile('./decks.json', 'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err);
      } else {
        storage = JSON.parse(data);
      }
    });

    const getRandomURL = 'http://applicant.pointsource.us/api/random/5a95a6a5d625c81979aa798c',
          min = 1,
          max = 53;
    var generatedArray = {};
    request(getRandomURL + '?min=' + min + '&max=' + max + '&num=' + (max - 1), function (error, response, body) {
      generatedArray = JSON.parse(body);
      storage.decks.push(generatedArray.numbers);
      fs.writeFile('./decks.json', JSON.stringify(storage), 'utf8');
    });
  });
};