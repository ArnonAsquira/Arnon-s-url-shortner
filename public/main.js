import style from './style.css';
import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';
import * as eventListeners from './eventListeners'


// adding event listeners
globalVR.submitButton.addEventListener('click', eventListeners.sendUrlToServer);

// redirecting to statistics sheet
globalVR.navBarStatistics.addEventListener('click', eventListeners.redirectToStatistics);
