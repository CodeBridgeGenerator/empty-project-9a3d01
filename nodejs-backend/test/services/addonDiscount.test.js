const assert = require('assert');
const app = require('../../src/app');

describe('\'addonDiscount\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonDiscount');

    assert.ok(service, 'Registered the service (addonDiscount)');
  });
});
