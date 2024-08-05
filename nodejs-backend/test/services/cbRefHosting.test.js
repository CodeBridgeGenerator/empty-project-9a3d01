const assert = require('assert');
const app = require('../../src/app');

describe('\'cbRefHosting\' service', () => {
  it('registered the service', () => {
    const service = app.service('cbRefHosting');

    assert.ok(service, 'Registered the service (cbRefHosting)');
  });
});
