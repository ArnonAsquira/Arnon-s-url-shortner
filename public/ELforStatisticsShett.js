import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';
import Swal from 'sweetalert2';

const serverUrl = 'http://localhost:3000';

// searrch url statistics in the server
export async function searchUrlStatistics(e) {
    e.preventDefault();
    let response;
    try {
        response = await axios.get(`${serverUrl}/api/statistic/${globalVR.searchStatisticsInput.value.slice(30)}`);
        console.log(response);
    } catch(error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
       return;
    }
    if (document.querySelector('.statSheet-main-div')){
        document.querySelector('.statSheet-main-div').remove();
    }
    const urlTimesUsed = createStatsEntries('times used:', response.data.timesUsed);
    const urlCreateDate = createStatsEntries('shortened url created at:', response.data.dateCreated.slice(0, 9));
    const charsShortened = createStatsEntries('charecters shortened:', response.data.shortend);
    const statSheet = helpers.createElement('div', [urlTimesUsed, urlCreateDate, charsShortened], ['statSheet-main-div'], {});
    document.getElementById('root').appendChild(statSheet);
}
// crates stat entries for the dom
function createStatsEntries(entry, stat) {
   return helpers.createElement('p', [`${entry} ${stat}`], [], {});
}

// creates a url object to be sent to the server via the body's request
function createUniqueUrl(url, ending) {
    try {
        ending = ending.split('').filter(char =>
            char !== " " 
        ).join('');
        const urlObj = {url, ending};
        return urlObj;
    }catch (error) {
        console.log(error);
    }
}

export async function sendUniqueUrlObjToServer(e) {
    e.preventDefault();
    const urlPremiumEntry = createUniqueUrl(globalVR.createUniqueUrlOldInput.value, globalVR.createUniqueUrlNewInput.value);
    try {
        const response = await axios.post(`${serverUrl}/api/shorturl/`, urlPremiumEntry);
        helpers.displayUrl(response.data.newUrl);
    } catch(error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
}
