var express = require('express');
var router = express.Router();

/* GET all URLs. */
router.get('/', function (req, res, next) {
  // Not enabled
  res.status(405).send('GETting all URLs is not supported');
});


/**
 * GET long URLs.
 * Pass in a short URL and return the mapped long URL
 */
router.get('/{url}', function (req, res, next) {
  // TODO: if short-URL doesn't exist, send 404, else send 200 and long-url
  res.send('Long-URL');
});

/**
 * POST Long URL
 * Request a short-url for the given long url
 */
router.get('/{url}', function (req, res, next) {
  // TODO: if URL already exists, send 200 and send back short-url, else send 201 and short-url

  res.send('Short-URL');
});

module.exports = router;
