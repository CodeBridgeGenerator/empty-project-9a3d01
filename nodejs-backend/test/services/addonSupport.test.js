const assert = require('assert');
const app = require('../../src/app');

describe('\'addonSupport\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonSupport');

    assert.ok(service, 'Registered the service (addonSupport)');
  });
});
