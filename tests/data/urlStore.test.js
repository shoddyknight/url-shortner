const urlStore = require('../../data/urlStore');

const {
  getLongURL,
  getShortURL,
} = urlStore;

describe('urlStore', () => {
  describe('getLongURL', () => {
    test('it should return an empty string', () => {
      const actual = getLongURL();

      expect(actual).toEqual('');
    });
  });

  describe('getShortURL', () => {
    test('it should return a placeholder object', () => {
      const actual = getShortURL();

      expect(actual).toMatchObject({
        shortUrl: '',
        urlExists: false,
      });
    });
  });
});
