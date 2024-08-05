const assert = require('assert');
const app = require('../../src/app');

describe('\'addonPackage\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonPackage');

    assert.ok(service, 'Registered the service (addonPackage)');
  });
});
