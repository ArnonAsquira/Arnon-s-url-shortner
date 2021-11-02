/* // global varibles */
const submitButton = document.getElementById('submit-url');
const urlInput = document.getElementById('url_input')


// adding event listeners
submitButton.addEventListener('click', sendUrlToServer);


// event listeners function
async function sendUrlToServer(e) {
    e.preventDefault();
    const urlTosend = urlInput.value;
    try {
        const response = await axios.post('http://localhost:3000/api/shorturl/', {url: urlTosend});
        console.log(response.data);
    } catch(error) {
       alert('this is not a vaild url');
    }
}

