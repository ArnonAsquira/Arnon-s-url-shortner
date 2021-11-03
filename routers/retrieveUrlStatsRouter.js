const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');


Router.use(express.json()) // parses requests as json

Router.get('/:url', (req, res) => {
    try {
       const dbArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), 'utf-8'));
       dbArray.forEach(urlEntry => {
           if (urlEntry.newUrl.slice(30) === req.params.url) {
               res.send(urlEntry);
           }
       });
    }catch(error) {
        console.log(error);
       res.status(403).send('this url does not exist in our database')
    }
})



module.exports = Router;