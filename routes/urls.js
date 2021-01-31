const express = require('express');

const urlStore = require('../data/urlStore');

const router = express.Router();

/* GET all URLs. */
router.get('/', function (req, res, next) {
  // Not enabled
  res.status(405).send('GETting all URLs is not supported');
});


/**
 * GET long URLs.
 * Pass in a short URL and return the mapped long URL
 */
router.get('/:url', function (req, res, next) {
  const shortURL = req.params.url;
  // TODO: if short-URL doesn't exist, send 404, else send 200 and long-url
  const longURL = urlStore.getLongURL(shortURL);

  if (!longURL) {
    res.status(404).send(`Long URL not found for: ${shortURL}`);
  } else {
    res.status(200).send(longURL);
  }
});

/**
 * POST Long URL
 * Request a short-url for the given long url
 *
 * Returns 200 if the URL is already mapped or 201 if the mapping was created
 */
router.post('/:url', function (req, res, next) {
  const longURL = req.params.url;

  const {
    shortURL,
    urlExists = false,
  } = urlStore.getShortURL(longURL);

  if (urlExists) {
    res.status(200).send(shortURL);
  } else {
    res.status(201).send(shortURL);
  }
});

module.exports = router;
