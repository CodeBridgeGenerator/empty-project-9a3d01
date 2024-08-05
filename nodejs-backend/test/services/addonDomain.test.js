const assert = require('assert');
const app = require('../../src/app');

describe('\'addonDomain\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonDomain');

    assert.ok(service, 'Registered the service (addonDomain)');
  });
});
