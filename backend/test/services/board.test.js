const app = require('../../src/app');

describe('\'board\' service', () => {
  it('registered the service', () => {
    const service = app.service('board');
    expect(service).toBeTruthy();
  });
});
