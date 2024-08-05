const assert = require('assert');
const app = require('../../src/app');

describe('\'cbRefGitPrivate\' service', () => {
  it('registered the service', () => {
    const service = app.service('cbRefGitPrivate');

    assert.ok(service, 'Registered the service (cbRefGitPrivate)');
  });
});
