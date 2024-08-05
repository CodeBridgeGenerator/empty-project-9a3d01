const { CbRefHosting } = require('./cbRefHosting.class');
const createModel = require('../../models/cbRefHosting.model');
const hooks = require('./cbRefHosting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefHosting', new CbRefHosting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefHosting');

  service.hooks(hooks);
};