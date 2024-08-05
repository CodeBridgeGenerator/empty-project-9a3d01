const { AddonPackage } = require('./addonPackage.class');
const createModel = require('../../models/addonPackage.model');
const hooks = require('./addonPackage.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonPackage', new AddonPackage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonPackage');

  service.hooks(hooks);
};