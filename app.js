const express = require('express');
const path = require('path');
const logger = require('morgan');

const urlsRouter = require('./routes/urls');

const app = express();

const port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

app.use('/', urlsRouter);

module.exports = app;
