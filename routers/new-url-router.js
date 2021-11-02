const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');


Router.use(express.json()) // parses requests as json

Router.post('/', (req, res) => {
    if (req.body.url.substring(0,7) != 'http://' && req.body.url.substring(0,8) != 'https://') {
    res.status(403).send('this is not a valid url');
    return;
}
    res.send(req.body.url);
})

module.exports = Router;