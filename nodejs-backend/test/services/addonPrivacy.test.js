const assert = require('assert');
const app = require('../../src/app');

describe('\'addonPrivacy\' service', () => {
  it('registered the service', () => {
    const service = app.service('addonPrivacy');

    assert.ok(service, 'Registered the service (addonPrivacy)');
  });
});
