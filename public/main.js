import style from './style.css';
import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';


// adding event listeners
globalVR.submitButton.addEventListener('click', sendUrlToServer);


// event listeners function
async function sendUrlToServer(e) {
    e.preventDefault();
    const urlTosend = globalVR.urlInput.value;
    try {
        const response = await axios.post('http://localhost:3000/api/shorturl/', {url: urlTosend});
        helpers.displayUrl(response.data.newUrl);
    } catch(error) {
        console.log(error);
        alert('this is not a vaild url');
    }
}