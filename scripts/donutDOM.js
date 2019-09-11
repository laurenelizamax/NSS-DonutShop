import donutHTML from "./donutHTML.js"

/* Resposnible for putting our donuts on the dom */

const donutDOMBuilder = (donutObj) => {
    document.querySelector(".donutContainer").innerHTML 
    += donutHTML(donutObj)
}

export default donutDOMBuilder
  