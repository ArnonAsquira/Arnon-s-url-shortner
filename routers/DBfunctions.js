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
    const newUrlEntry = {newUrl: `https://arni-url.herokuapp.com/arniurl/${newUrlId}`, oldUrl: urlToShorten, timesUsed: 0, dateCreated: new Date()};
    return newUrlEntry;
}

// push urk entry to database
function pushUrlEntryToDB(urlRecieved, urlEnding) {
        const dbArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../urls-database/main-DB.json'), 'utf-8'));
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

exports.pushUrlEntryToDB = pushUrlEntryToDB;