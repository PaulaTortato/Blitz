require('dotenv').config();
const express = require('express');
const router = require('./routes');

const app = express();

const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log('ouvindo porta', port));

module.exports = app;