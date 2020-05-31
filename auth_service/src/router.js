"use strict";

const { PORT_NO } = require("../constants");
const { login } = require("../api/login");

const bodyParser = require("body-parser");
const express = require('express');
const app = express();


const errorHandler = (err, req, res, next) => {
  res.status(500).send("borked");
};

exports.init = () => {
  app.use(bodyParser.json());
  app.use(errorHandler);

  app.post('/login', async (req, res, next) => {
    const response = await login(req.body);
    res.status(200).send(response);
  });

  app.get('*', (req, res) => {
    res.status(200).send("aight");
  });

  app.listen(PORT_NO);
  console.log(`App listening on port %d`, PORT_NO);
}
