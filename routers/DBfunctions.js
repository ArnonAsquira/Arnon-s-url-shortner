const { response } = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


function createNewUrlEntry (urlToShorten, urlEnding) {
    let newUrlId;
    if (!urlEnding) {
        newUrlId =  uuidv4().slice(0, 5);
    } else {
        newUrlId = urlEnding;
    }
    const newUrlEntry = {newUrl: `http://localhost:3000/arniurl/${newUrlId}`, oldUrl: urlToShorten, urlEnding: newUrlId, timesUsed: 0, dateCreated: new Date()};
    return newUrlEntry;
}

// push urk entry to database
function pushUrlEntryToDB(urlRecieved, urlEnding) {
        const dbArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), 'utf-8'));
        if (checkForDuplicateEndings(dbArray, urlEnding)) {
            response.status(403).send('this ending is already taken');
            return;
        }
        let indexCounter = 0;
        let existingUrl;
        dbArray.forEach(urlEntry => {
            if(urlEntry.oldUrl === urlRecieved) {
                existingUrl = urlEntry
                return;
            }
            indexCounter ++;
        })
        if (indexCounter !== dbArray.length) {
            return existingUrl;
        }
        dbArray.push(createNewUrlEntry(urlRecieved,  urlEnding));
        fs.writeFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), JSON.stringify(dbArray));
        return dbArray[dbArray.length-1]; 
}


function checkForDuplicateEndings(dbArray, ending) {
    let taken = false;
   dbArray.forEach(entry => {
      if (entry.urlEnding === ending) {
        taken = true;
      }
   })
   return taken;
}

exports.pushUrlEntryToDB = pushUrlEntryToDB;