const urlStore = require('../../data/urlStore');

const {
  getLongURL,
  getShortURL,
} = urlStore;

describe('urlStore', () => {
  describe('getLongURL', () => {
    test('it should return falsey if no mapping exists for input short url', () => {
      const actual = getLongURL('Hello');

      expect(actual).toBeFalsy();
    });

    test('it should return the long url where a mapping exists for input short url', async () => {
      const shortURL = 'World';
      const longURL = 'Hello';

      const cryptoRandomString = () => shortURL;
      getShortURL(longURL, cryptoRandomString);

      const actual = getLongURL(shortURL);

      expect(actual).toEqual(longURL);
    });
  });

  describe('getShortURL', () => {
    test('it should return a short url when the long url does not have a mapping already', () => {
      const expected = 'World';

      const cryptoRandomString = () => expected;

      const actual = getShortURL('HelloThere', cryptoRandomString);

      expect(actual).toMatchObject({
        shortUrl: expected,
        urlExists: false,
      });
    });

    test('it should return a short url when the long url has a mapping already', () => {
      const expected = 'World';

      const cryptoRandomString = () => expected;
      // Add the long URL to the mapping first
      getShortURL('HelloThere', cryptoRandomString);

      // Attempt to get a short URL for the same long URL again
      const actual = getShortURL('HelloThere', cryptoRandomString);

      expect(actual).toMatchObject({
        shortUrl: expected,
        urlExists: true,
      });
    });
  });
});
