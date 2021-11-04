const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const pushUrlEntryToDB = require('./DBfunctions');


Router.use(express.json()) // parses requests as json

Router.post('/', (req, res) => {
    console.log('req recieved');
    console.log(req.body);
    if (req.body.url.substring(0,7) != 'http://' && req.body.url.substring(0,8) != 'https://') {
       res.status(403).send('this is not a valid url');
       return;
    }
    try {
        console.log()
        res.send(pushUrlEntryToDB.pushUrlEntryToDB(req.body.url, req.body.ending));
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;