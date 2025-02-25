const { AddonDiscount } = require('./addonDiscount.class');
const createModel = require('../../models/addonDiscount.model');
const hooks = require('./addonDiscount.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonDiscount', new AddonDiscount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonDiscount');

  service.hooks(hooks);
};