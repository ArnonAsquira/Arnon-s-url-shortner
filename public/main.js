import style from './style.css';
import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';
import * as eventListeners from './eventListeners'
import * as eventListenersForStatSheet from './ELforStatisticsShett';

try {
   // adding event listeners
    globalVR.submitButton.addEventListener('click', eventListeners.sendUrlToServer);
    // redirecting to statistics sheet
    globalVR.navBarStatistics.addEventListener('click', eventListeners.redirectToStatistics);
    // redirect to home page
    globalVR.navBarHome.addEventListener('click', eventListeners.redirectToHome);
    // redirects to why
    globalVR.navBarWhy.addEventListener('click', eventListeners.redirectToWhy);
} catch(error) {  
   console.log('didnt load home page eventlisteners');
}

// statistics sheet event listeners
try {
    globalVR.searchStatisticsButton.addEventListener('click', eventListenersForStatSheet.searchUrlStatistics);
    globalVR.navBarHome.addEventListener('click', eventListeners.redirectToHome);
    globalVR.createUniqueUrlButton.addEventListener('click', eventListenersForStatSheet.sendUniqueUrlObjToServer);
     // redirects to why
     globalVR.navBarWhy.addEventListener('click', eventListeners.redirectToWhy);
} catch (error) {
    console.log('didnt load stat sheet event listeners');
}

try {
    globalVR.navBarHome.addEventListener('click', eventListeners.redirectToHome);
    globalVR.navBarStatistics.addEventListener('click', eventListeners.redirectToStatistics);
} catch(error) {
    console.log('loaded only the why page listeners');
}



