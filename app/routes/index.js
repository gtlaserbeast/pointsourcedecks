const randomDeckRoutes = require('./random_deck_routes');
const randomNumberRoutes = require('./random_number_routes');

module.exports = function(app) {
  randomDeckRoutes(app);
  randomNumberRoutes(app);
};