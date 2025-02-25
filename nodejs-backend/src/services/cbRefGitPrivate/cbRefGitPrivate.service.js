const { CbRefGitPrivate } = require('./cbRefGitPrivate.class');
const createModel = require('../../models/cbRefGitPrivate.model');
const hooks = require('./cbRefGitPrivate.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefGitPrivate', new CbRefGitPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefGitPrivate');

  service.hooks(hooks);
};