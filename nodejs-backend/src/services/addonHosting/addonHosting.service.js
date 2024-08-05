const { AddonHosting } = require('./addonHosting.class');
const createModel = require('../../models/addonHosting.model');
const hooks = require('./addonHosting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonHosting', new AddonHosting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonHosting');

  service.hooks(hooks);
};