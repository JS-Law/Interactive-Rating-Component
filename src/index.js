import { ElementAppender, ElementCreator, ImageImporter } from './helpers.js/helpers'
import './styles.css'

const buttonCreator = new ElementCreator('button', { id: 'home-button', class: 'btn' }, 'Home');
const homeButton = buttonCreator.createElement();

const appender = new ElementAppender(document.body, homeButton);
appender.appendElements();
