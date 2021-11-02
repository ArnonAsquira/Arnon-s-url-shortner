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
        displayUrl(response.data.newUrl);
    } catch(error) {
       alert('this is not a vaild url');
    }
}

// creating a response div to display the shortend url

function displayUrl(newUrl) {
   const displayDiv = createElement('div', [newUrl], ['newUrl-display-div'], {});
   if (document.querySelector('.newUrl-display-div')) {
    document.querySelector('.newUrl-display-div').remove();
   }
   Array.from(document.getElementsByTagName('main'))[0].appendChild(displayDiv);
}



// generic create element function
function createElement(tagName, children = [], classes = [], attributes = {}) {
        let newEl = document.createElement(tagName);
        for(let child of children){
            if(typeof(child) === "string"){
                child = document.createTextNode(child);
            }
            newEl.append(child);
        }
        for(let cls of classes){
            newEl.classList.add(cls);
        }
        for(let attr in attributes){
            newEl.setAttribute(attr, attributes[attr]);
        }
        return newEl
}