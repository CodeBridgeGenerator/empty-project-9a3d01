const assert = require('assert');
const app = require('../../src/app');

describe('\'cbRefPackages\' service', () => {
  it('registered the service', () => {
    const service = app.service('cbRefPackages');

    assert.ok(service, 'Registered the service (cbRefPackages)');
  });
});
