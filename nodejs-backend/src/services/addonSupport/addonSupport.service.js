const { AddonSupport } = require('./addonSupport.class');
const createModel = require('../../models/addonSupport.model');
const hooks = require('./addonSupport.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonSupport', new AddonSupport(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonSupport');

  service.hooks(hooks);
};