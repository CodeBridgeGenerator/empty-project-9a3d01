const assert = require('assert');
const app = require('../../src/app');

describe('\'cbRefDiscountCode\' service', () => {
  it('registered the service', () => {
    const service = app.service('cbRefDiscountCode');

    assert.ok(service, 'Registered the service (cbRefDiscountCode)');
  });
});
