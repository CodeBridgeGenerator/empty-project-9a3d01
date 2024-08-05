const { AddonUsers } = require('./addonUsers.class');
const createModel = require('../../models/addonUsers.model');
const hooks = require('./addonUsers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonUsers', new AddonUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonUsers');

  service.hooks(hooks);
};