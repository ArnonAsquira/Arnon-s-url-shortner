require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const shortenRequestRouter = require('./routers/new-url-router');
const redirectRouter = require('./routers/redirect-router')

app.use(cors({
  origin: '*',
  methods: '*'
}));

app.use(express.static(`dist`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.use('/arniurl', redirectRouter)

app.use('/api/shorturl', shortenRequestRouter);

module.exports = app;
