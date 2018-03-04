
module.exports = function(app, db) {
  var request = require('request');
  // app.get('/deck/:id', (req, res) => {
  //   const details = { '_id': req };
  //   db.collection('decks').findOne(details, (err, item) => {
  //     if (err) {
  //       res.send({'error':'An error has occurred'});
  //     } else {
  //       res.send(item);
  //     }
  //   });
  // });

app.post('/randomDeck', (req, res) => {
    const getRandomURL = 'http://applicant.pointsource.us/api/random/5a95a6a5d625c81979aa798c',
          min = 1,
          max = 53;
    var generatedArray = {};
    request(getRandomURL + '?min=' + min + '&max=' + max + '&num=' + (max - 1), function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      generatedArray = body;
    });
    const deck = generatedArray.numbers;
    res.send();
    // db.collection('decks').insert(deck, (err, result) => {
    //   if (err) { 
    //     res.send({ 'error': 'An error has occurred' }); 
    //   } else {
    //     res.send(result.ops[0]);
    //   }
    // });
  });
};