/**
 * For simplicities sake in this coding challenge I am going to use an object to map long-urls
 * and hold that in server memory.
 * Ideally we'd want a longer term storage solution backed by a fast responsive cache,
 * but connecting a database would take more time than I'd like to spend,
 * when testing and CI/CD can be added instead.
 */

// Named as "default" so that I can inject a Mock function in Jest tests
const defaultCryptoRandomString = require('crypto-random-string');

const urlMapping = {};

/**
 * Given a Short URL this will return the relevant Long URL
 * @param shortURL
 * @returns {string} - Long URL
 */
const getLongURL = (shortURL) => urlMapping[shortURL];

/**
 * Given a long URL this will either return the existing mapping
 * or create a new mapping to a short-url
 * @param longURL
 * @param cryptoRandomString - cryptoRandomString generator either
 * https://www.npmjs.com/package/crypto-random-string or a Jest mock
 * @returns {{urlExists: boolean, shortUrl: string}}
 */
const getShortURL = (longURL, cryptoRandomString = defaultCryptoRandomString) => {
  // Find any existing mapping for the longURL
  const existingShortURL = Object.keys(urlMapping)
    .find((shortURLKey) => urlMapping[shortURLKey] === longURL);

  if (existingShortURL) {
    return {
      shortUrl: existingShortURL,
      urlExists: true,
    };
  }

  // Generate a mapping and add to the cache
  const shortURL = cryptoRandomString({length: 5});

  urlMapping[shortURL] = longURL;

  return {
    shortUrl: shortURL,
    urlExists: false,
  };
};

module.exports = {
  getLongURL,
  getShortURL,
};
