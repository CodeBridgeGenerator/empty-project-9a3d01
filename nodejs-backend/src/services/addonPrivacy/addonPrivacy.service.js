const { AddonPrivacy } = require('./addonPrivacy.class');
const createModel = require('../../models/addonPrivacy.model');
const hooks = require('./addonPrivacy.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/addonPrivacy', new AddonPrivacy(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addonPrivacy');

  service.hooks(hooks);
};