import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';

export async function searchUrlStatistics(e) {
    e.preventDefault();
    const response = await axios.get(`http://localhost:3000/api/statistic/${globalVR.searchStatisticsInput.value.slice(30)}`);
    console.log(response.data);
    const urlTimesUsed = createStatsEntries('times used:', response.data.timesUsed);
    const urlCreateDate = createStatsEntries('shortened url created at:', response.data.dateCreated.slice(0, 9));
    const statSheet = helpers.createElement('div', [urlTimesUsed, urlCreateDate], ['statSheet-main-div'], {});
    document.getElementById('root').appendChild(statSheet);
}

function createStatsEntries(entry, stat) {
   return helpers.createElement('p', [`${entry} ${stat}`], [], {});
}