const { CbRefDomains } = require('./cbRefDomains.class');
const createModel = require('../../models/cbRefDomains.model');
const hooks = require('./cbRefDomains.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefDomains', new CbRefDomains(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefDomains');

  service.hooks(hooks);
};