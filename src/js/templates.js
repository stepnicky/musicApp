import { select } from './settings.js';

export const templates = {
    homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML)
};