import { ElementAppender, ElementCreator, ImageImporter } from './helpers.js/helpers'
import './styles.css'


// const buttonCreator = new ElementCreator('button', { id: 'home-button', class: 'btn' }, 'Home');
// const homeButton = buttonCreator.createElement();

// const appender = new ElementAppender(document.body, homeButton);
// appender.appendElements();


function loadContainers(){
    if(document.getElementById('content') === null){
        // Create an instance of ElementCreator for a <main> element with ID 'content'
        const contentCreator = new ElementCreator('main', { id: 'content' });
        
        // Generate the actual DOM element
        const contentElement = contentCreator.createElement();
        
        // Create an instance of ElementAppender to append the <main> element to <body>
        const appender = new ElementAppender(document.body, contentElement);
        
        // Append the element to the DOM
        appender.appendElements();
    }
}


function loadContent(){

}




// LOAD DOM CONTENT
// CALLS THE ABOVE FUNCTIONS
function loadSite(){
    document.addEventListener('DOMContentLoaded', () => {
        loadContainers()
    })    
}


export{
    loadSite
}