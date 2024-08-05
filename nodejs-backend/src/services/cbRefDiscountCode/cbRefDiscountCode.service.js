const { CbRefDiscountCode } = require('./cbRefDiscountCode.class');
const createModel = require('../../models/cbRefDiscountCode.model');
const hooks = require('./cbRefDiscountCode.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/cbRefDiscountCode', new CbRefDiscountCode(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cbRefDiscountCode');

  service.hooks(hooks);
};