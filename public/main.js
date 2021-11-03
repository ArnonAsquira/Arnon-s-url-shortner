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
} catch(error) {  
   console.log(error);
}

// statistics sheet event listeners
try {
    globalVR.searchStatisticsButton.addEventListener('click', eventListenersForStatSheet.searchUrlStatistics);
    globalVR.navBarHome.addEventListener('click', eventListeners.redirectToHome);
} catch (error) {
    console.log('didnt load style sheet event listeners');
}



