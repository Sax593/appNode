const express = require("express");
const app = express();
const http = require("http");
const port = 8000;
require("dotenv").config();

const requestHandler = (req, res) => {
  console.log(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
  );
  response.end(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
  );
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("Something bad happenend");
  } else {
    console.log(`server is listening on ${port}`);
  }
});
