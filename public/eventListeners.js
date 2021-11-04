import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';

const serverUrl = 'http://localhost:3000';

// event listeners function
export async function sendUrlToServer(e) {
    e.preventDefault();
    const urlTosend = globalVR.urlInput.value;
    try {
        const response = await axios.post(`${serverUrl}/api/shorturl/`, {url: urlTosend});
        console.log(response)
        helpers.displayUrl(response.data.newUrl);
    } catch(error) {
        console.log(error);
        alert('this is not a vaild url');
    }
}

// redirecting to statistics sheet html

export async function redirectToStatistics(e) {
    try {
        window.location.assign(`${serverUrl}/satistics`);
        // await axios.get(`${serverUrl}/satistics/`);
    } catch(error) {
        console.log(error);
        alert ('redirection failed')
    }
}

export function redirectToHome(e) {
   helpers.redirectTo(serverUrl);
}