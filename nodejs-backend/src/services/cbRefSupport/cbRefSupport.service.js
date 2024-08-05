const { CbRefSupport } = require('./cbRefSupport.class');
const createModel = require('../../models/cbRefSupport.model');
const hooks = require('./cbRefSupport.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefSupport', new CbRefSupport(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefSupport');

  service.hooks(hooks);
};