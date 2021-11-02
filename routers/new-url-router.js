const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


Router.use(express.json()) // parses requests as json

Router.post('/', (req, res) => {
    console.log('req recieved');
    if (req.body.url.substring(0,7) != 'http://' && req.body.url.substring(0,8) != 'https://') {
       res.status(403).send('this is not a valid url');
       return;
    }
    try {
        const dbArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), 'utf-8'));
        let indexCounter = 0;
        dbArray.forEach(urlEntry => {
            if(urlEntry.oldUrl === req.body.url) {
              res.send(urlEntry);
              return;
            }
            indexCounter ++;
        })
        if (indexCounter !== dbArray.length) {
            console.log(indexCounter);
            return;
        }
        dbArray.push(createNewUrlEntry(req.body.url));
        fs.writeFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), JSON.stringify(dbArray));
        res.send(dbArray[dbArray.length-1]);
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})


function createNewUrlEntry (urlToShorten) {
    const newUrlId =  uuidv4().slice(0, 5);
    const newUrlEntry = {newUrl: `http://localhost:3000/arniurl/${newUrlId}`, oldUrl: urlToShorten};
    return newUrlEntry;
}

module.exports = Router;