const assert = require('assert');
const app = require('../../src/app');

describe('\'addonHosting\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonHosting');

    assert.ok(service, 'Registered the service (addonHosting)');
  });
});
