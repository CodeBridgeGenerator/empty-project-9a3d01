const assert = require('assert');
const app = require('../../src/app');

describe('\'cbRefDomains\' service', () => {
  it('registered the service', () => {
    const service = app.service('cbRefDomains');

    assert.ok(service, 'Registered the service (cbRefDomains)');
  });
});
