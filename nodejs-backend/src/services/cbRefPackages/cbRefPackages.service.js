const { CbRefPackages } = require('./cbRefPackages.class');
const createModel = require('../../models/cbRefPackages.model');
const hooks = require('./cbRefPackages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefPackages', new CbRefPackages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefPackages');

  service.hooks(hooks);
};