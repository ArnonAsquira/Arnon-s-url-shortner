const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');


Router.use(express.json()) // parses requests as json

Router.get('/:urlid', (req, res) => {
    try {
       const DB = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), 'utf-8'));
       DB.forEach(urlEntry => {
           console.log(urlEntry);
           if (urlEntry.newUrl === `https://arni-url.herokuapp.com/arniurl/${req.params.urlid}`) {
               urlEntry.timesUsed ++;
               console.log(urlEntry.timesUse);
               res.redirect(301, urlEntry.oldUrl);
               return;
           }
       });
       fs.writeFileSync(fs.writeFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), JSON.stringify(DB)))
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;