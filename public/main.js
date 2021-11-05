import style from './style.css';
import * as globalVR from './globalVariabalrs';
import * as helpers from './helperFunctions';
import * as eventListeners from './eventListeners'
import * as eventListenersForStatSheet from './ELforStatisticsShett';
import * as THREE from 'three';

try {
   // adding event listeners
    globalVR.submitButton.addEventListener('click', eventListeners.sendUrlToServer);
    // redirecting to statistics sheet
    globalVR.navBarStatistics.addEventListener('click', eventListeners.redirectToStatistics);
    // redirect to home page
    globalVR.navBarHome.addEventListener('click', eventListeners.redirectToHome);
    // redirects to why
    globalVR.navBarWhy.addEventListener('click', eventListeners.redirectToWhy);
    // three.js animation 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75 , 1 / 1, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 300, 300 );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;


function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
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




