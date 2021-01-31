const router = require('../../routes/urls');

// TODO: use super-test or break up code in urls in order to test the logic of the endpoints
describe.skip('/', () => {
  test('should return 405 on a GET', () => {
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };

    router.get('/', ('', res));

    expect(res.status.mock.calls[0][0]).toBe(405);
  });
});
