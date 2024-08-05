const assert = require('assert');
const app = require('../../src/app');

describe('\'addonUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonUsers');

    assert.ok(service, 'Registered the service (addonUsers)');
  });
});
