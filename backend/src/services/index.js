const users = require('./users/users.service.js');
const game = require('./game/game.service.js');
const board = require('./board/board.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(game);
  app.configure(board);
};
