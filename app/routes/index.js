const randomDeckRoutes = require('./random_deck_routes');

module.exports = function(app) {
  randomDeckRoutes(app);
};