require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const shortenRequestRouter = require('./routers/new-url-router');
const redirectRouter = require('./routers/redirect-router');
const getStatsRouter = require('./routers/retrieveUrlStatsRouter');

app.use(cors({
  origin: '*',
  methods: '*'
}));

app.use(express.static(`dist`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// sending statisics sheet
app.get('/satistics', (req, res) => {
  res.sendFile(__dirname + "/dist/statistics.html");
})

// sending the why page
app.get('/why', (req, res) => {
  res.sendFile(__dirname + "/dist/why.html");
})

app.use('/arniurl', redirectRouter)

app.use('/api/shorturl', shortenRequestRouter);

app.use('/api/statistic/', getStatsRouter);


module.exports = app;
