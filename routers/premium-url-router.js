const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const pushUrlEntryToDB = require('./DBfunctions');

Router.use(express.json()) // parses requests as json

Router.post('/', (req, res) => {
    
})





module.exports = Router;


