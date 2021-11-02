require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const shortenRequestRouter = require('./routers/new-url-router');

app.use(cors({
  origin: '*',
  methods: '*'
}));

app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/api/shorturl', shortenRequestRouter);

module.exports = app;
