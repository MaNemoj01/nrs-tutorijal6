const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

// Static pages

app.use('/', express.static('public'));

// Port listening

const port = process.env.PORT || 23456;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});