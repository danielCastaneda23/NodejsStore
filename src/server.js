const express = require('express');
const cors = require('cors')
const app = express();
const compression = require('compression')

const routes = require('./routes/routes')
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(cors());
app.use(compression())
app.use(routes(router));

module.exports = app;