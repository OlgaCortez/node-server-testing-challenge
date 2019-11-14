const express = require("express");

const Dogs = require("../dogs/dogsModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Dog", environment: process.env.DB_ENV });
});

server.get("/dogs", (req, res) => {
  Dogs.getAll()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;