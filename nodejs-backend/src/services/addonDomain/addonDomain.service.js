const { AddonDomain } = require('./addonDomain.class');
const createModel = require('../../models/addonDomain.model');
const hooks = require('./addonDomain.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonDomain', new AddonDomain(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonDomain');

  service.hooks(hooks);
};