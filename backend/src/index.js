require('dotenv').config();
const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log('ouvindo porta', port));