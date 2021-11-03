// generic create element function
export function createElement(tagName, children = [], classes = [], attributes = {}) {
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


// display url function
export function displayUrl(newUrl) {
    const displayDiv = createElement('div', [newUrl], ['newUrl-display-div'], {});
    if (document.querySelector('.newUrl-display-div')) {
     document.querySelector('.newUrl-display-div').remove();
    }
    Array.from(document.getElementsByTagName('main'))[0].appendChild(displayDiv);
 }


// redirect function
export function redirectTo(url) {
    try {
        window.location.assign(url);
    } catch(error) {
        console.log(error);
        alert ('redirection failed')
    }
}