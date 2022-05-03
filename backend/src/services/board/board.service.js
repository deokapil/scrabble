// Initializes the `board` service on path `/board`
const { Board } = require('./board.class');
const createModel = require('../../models/board.model');
const hooks = require('./board.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/board', new Board(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('board');

  service.hooks(hooks);
};
